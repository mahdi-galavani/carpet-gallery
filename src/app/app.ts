import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CARPETS, CATEGORIES, SOCIAL_LINKS, Carpet } from './data/carpets';
@Component({selector:'app-root',standalone:true,imports:[FormsModule],templateUrl:'./app.html',styleUrl:'./app.scss'})
export class App implements OnInit {
readonly carpets=CARPETS; readonly categories=CATEGORIES; readonly social=SOCIAL_LINKS;
search=''; favorites:number[]=[]; favoritesOnly=false; wizardRegion='همه'; wizardStyle=''; wizardSpace=''; previewImage='/images/15378-6-primary.webp.jpeg'; previewSize=100;
catalogPage=0;
readonly catalogPages=['خانه','مجموعه‌ها','داستان ما','راهنمای انتخاب','فرش‌ها','تماس با ما'];
setCatalogPage(page:number):void { this.catalogPage=Math.max(0,Math.min(this.catalogPages.length-1,page)); }
ngOnInit():void { try { const saved=localStorage.getItem('mah-favorites'); this.favorites=saved ? JSON.parse(saved) : []; if (!Array.isArray(this.favorites)) this.favorites=[]; } catch { this.favorites=[]; } }
toggleFavorite(id:number):void { this.favorites=this.favorites.includes(id)?this.favorites.filter(x=>x!==id):[...this.favorites,id]; try { localStorage.setItem('mah-favorites',JSON.stringify(this.favorites)); } catch {} }
showFavorites():void { this.favoritesOnly=!this.favoritesOnly; this.selectedCategory='همه'; document.getElementById('collection')?.scrollIntoView({behavior:'smooth'}); }
applyWizard():void { this.selectedCategory=this.wizardRegion; this.favoritesOnly=false; this.search=''; document.getElementById('collection')?.scrollIntoView({behavior:'smooth'}); }
selectedCategory='همه'; selectedCarpet:Carpet|null=null; menuOpen=false; scrolled=false;
get filteredCarpets():Carpet[]{return this.carpets.filter(c=>(this.selectedCategory==='همه'||c.category===this.selectedCategory)&&(!this.favoritesOnly||this.favorites.includes(c.id))&&(!this.search.trim()||[c.name,c.region,c.englishName,c.description].some(v=>v.toLowerCase().includes(this.search.trim().toLowerCase()))));}
navigate(event:MouseEvent, id:string):void { event.preventDefault(); this.menuOpen=false; document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}); history.replaceState(null,'','#'+id); }
chooseCategory(category:string):void{this.selectedCategory=category;this.favoritesOnly=false;document.getElementById('collection')?.scrollIntoView({behavior:'smooth'});}
@HostListener('window:scroll') onScroll():void{this.scrolled=window.scrollY>40;}
@HostListener('document:keydown.escape') closeDialog():void{this.selectedCarpet=null;this.menuOpen=false;}
}
