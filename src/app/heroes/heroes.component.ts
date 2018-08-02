import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
//import {HEROES} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero={
    id:1,
    name:"Wade"
  };
  selectedHero: Hero ;
  //heroes=HEROES;
  heroes:Hero[];
 getHeroes():void{
   //    this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(hero=>this.heroes=hero);
 }
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero:Hero):void {
    this.selectedHero=hero;
  }
}
