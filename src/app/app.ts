import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  CARPETS,
  CATEGORIES,
  Carpet,
  EXHIBITION_SLIDES,
  SOCIAL_LINKS,
  WEAVING_CHAPTERS,
} from './data/carpets';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly slides = EXHIBITION_SLIDES;
  readonly chapters = WEAVING_CHAPTERS;
  readonly carpets = CARPETS;
  readonly schools = CATEGORIES;
  readonly social = SOCIAL_LINKS;

  readonly currentSlide = signal(0);
  readonly slideshowPaused = signal(false);
  readonly slideTick = signal(0);

  readonly activeChapterIndex = signal(0);
  readonly selectedSchool = signal('همه');
  readonly activeSchoolIndex = signal(0);
  readonly selectedCarpet = signal<Carpet | null>(null);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly activeSlide = computed(() => this.slides[this.currentSlide()]);
  readonly activeChapter = computed(() => this.chapters[this.activeChapterIndex()]);
  readonly activeSchool = computed(() => this.schools[this.activeSchoolIndex()]);

  readonly filteredCarpets = computed(() => {
    const filter = this.selectedSchool();
    if (filter === 'همه') {
      return this.carpets;
    }
    return this.carpets.filter((c) => c.category === filter);
  });

  readonly selectedCarpetPosition = computed(() => {
    const carpet = this.selectedCarpet();
    if (!carpet) return null;
    const list = this.filteredCarpets();
    const index = list.findIndex((item) => item.id === carpet.id);
    if (index === -1) return null;
    return { index, total: list.length };
  });

  private timerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.onScroll();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      this.startAutoSlide();
    } else {
      this.slideshowPaused.set(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal-block').forEach((el) => observer.observe(el));
    });

    this.destroyRef.onDestroy(() => {
      this.stopAutoSlide();
      observer.disconnect();
    });
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();
    this.timerId = setInterval(() => {
      if (!this.slideshowPaused() && !this.selectedCarpet()) {
        this.advanceSlide(1);
      }
    }, 6500);
  }

  private stopAutoSlide(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private advanceSlide(step: number): void {
    const total = this.slides.length;
    this.currentSlide.update((index) => (index + step + total) % total);
    this.slideTick.update((tick) => tick + 1);
  }

  goToSlide(index: number): void {
    const total = this.slides.length;
    this.currentSlide.set(((index % total) + total) % total);
    this.slideTick.update((tick) => tick + 1);
    if (isPlatformBrowser(this.platformId) && !this.slideshowPaused()) {
      this.startAutoSlide();
    }
  }

  nextSlide(): void {
    this.goToSlide(this.currentSlide() + 1);
  }

  prevSlide(): void {
    this.goToSlide(this.currentSlide() - 1);
  }

  toggleSlideshow(): void {
    const next = !this.slideshowPaused();
    this.slideshowPaused.set(next);
    if (!next && isPlatformBrowser(this.platformId)) {
      this.slideTick.update((tick) => tick + 1);
      this.startAutoSlide();
    }
  }

  setChapter(index: number): void {
    this.activeChapterIndex.set(index);
  }

  selectSchoolFilter(schoolName: string): void {
    this.selectedSchool.set(schoolName);
  }

  selectSchoolShowcase(index: number): void {
    this.activeSchoolIndex.set(index);
  }

  exploreSchoolInGallery(schoolName: string): void {
    this.selectedSchool.set(schoolName);
    this.scrollToSection('gallery');
  }

  openCarpet(carpet: Carpet): void {
    this.selectedCarpet.set(carpet);
  }

  closeCarpet(): void {
    this.selectedCarpet.set(null);
  }

  stepCarpetModal(delta: number): void {
    const current = this.selectedCarpet();
    if (!current) return;
    const list = this.filteredCarpets();
    if (list.length <= 1) return;
    const idx = list.findIndex((item) => item.id === current.id);
    if (idx === -1) return;
    const nextIdx = (idx + delta + list.length) % list.length;
    this.selectedCarpet.set(list[nextIdx]);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  navigate(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.menuOpen.set(false);
    this.scrollToSection(id);
    if (isPlatformBrowser(this.platformId)) {
      history.replaceState(null, '', `#${id}`);
    }
  }

  private scrollToSection(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = document.getElementById(id);
    if (!target) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({
      behavior: reduced ? 'instant' : 'smooth',
      block: 'start',
    });
  }

  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 48);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.selectedCarpet.set(null);
      this.menuOpen.set(false);
      return;
    }

    if (this.selectedCarpet()) {
      if (event.key === 'ArrowLeft') {
        this.stepCarpetModal(1);
      } else if (event.key === 'ArrowRight') {
        this.stepCarpetModal(-1);
      }
      return;
    }

    if (isPlatformBrowser(this.platformId) && window.scrollY < 450) {
      if (event.key === 'ArrowLeft') {
        this.nextSlide();
      } else if (event.key === 'ArrowRight') {
        this.prevSlide();
      }
    }
  }

  formatPersianIndex(value: number): string {
    const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(value)
      .padStart(2, '0')
      .replace(/[0-9]/g, (d) => digits[Number(d)]);
  }
}
