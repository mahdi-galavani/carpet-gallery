import { Component, HostListener } from '@angular/core';
import { CARPETS, CATEGORIES, SOCIAL_LINKS, Carpet } from './data/carpets';
@Component({selector:'app-root',standalone:true,templateUrl:'./app.html',styleUrl:'./app.scss'})
export class App {
readonly carpets=CARPETS; readonly categories=CATEGORIES; readonly social=SOCIAL_LINKS;
selectedCategory='همه'; selectedCarpet:Carpet|null=null; menuOpen=false; scrolled=false;
get filteredCarpets():Carpet[]{return this.selectedCategory==='همه'?this.carpets:this.carpets.filter(c=>c.category===this.selectedCategory);}
chooseCategory(category:string):void{this.selectedCategory=category;document.getElementById('collection')?.scrollIntoView({behavior:'smooth'});}
@HostListener('window:scroll') onScroll():void{this.scrolled=window.scrollY>40;}
@HostListener('document:keydown.escape') closeDialog():void{this.selectedCarpet=null;this.menuOpen=false;}
}