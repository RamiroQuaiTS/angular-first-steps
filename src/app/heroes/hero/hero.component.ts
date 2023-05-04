import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  constructor() { }

  public name : string = "ironman"
  public age  : number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  heroDesc():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name="Superman";
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = "ironman"
    this.age  = 45
  }

  ngOnInit(): void {
  }

}
