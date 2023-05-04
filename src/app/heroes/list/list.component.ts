import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public heroesNamesInitial : string[] = ["Superman", "Batman", "Robin", "Gatubela"];
  public heroesNames : string[] = ["Superman", "Batman", "Robin", "Gatubela"];
  public deletedHero : string = '';
  public totalHeroes : number = this.heroesNames.length;

  removeLastHero():void{
    this.deletedHero += `${this.heroesNames.pop()} -`;
  }

  restartHeroes():void{
    console.log(this.heroesNamesInitial);
    this.heroesNames = this.heroesNamesInitial.slice();
    this.deletedHero = '';
  }

  ngOnInit(): void {
  }

}
