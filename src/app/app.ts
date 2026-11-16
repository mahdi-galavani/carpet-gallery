import { Component, HostListener } from '@angular/core';
import { CARPETS, CATEGORIES, SOCIAL_LINKS, Carpet } from './data/carpets';
@Component({selector:'app-root',standalone:true,templateUrl:'./app.html',styleUrl:'./app.scss'})
export class App {
readonly carpets=CARPETS; readonly categories=CATEGORIES; readonly social=SOCIAL_LINKS;
selectedCategory='همه'; selectedCarpet:Carpet|null=null; menuOpen=false; scrolled=false;
get filteredCarpets():Carpet[]{return this.selectedCategory==='همه'?this.carpets:this.carpets.filter(c=>c.category===this.selectedCategory);}
navigate(event:MouseEvent, id:string):void { event.preventDefault(); this.menuOpen=false; document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'}); history.replaceState(null,'','#'+id); }
chooseCategory(category:string):void{this.selectedCategory=category;document.getElementById('collection')?.scrollIntoView({behavior:'smooth'});}
@HostListener('window:scroll') onScroll():void{this.scrolled=window.scrollY>40;}
@HostListener('document:keydown.escape') closeDialog():void{this.selectedCarpet=null;this.menuOpen=false;}
}