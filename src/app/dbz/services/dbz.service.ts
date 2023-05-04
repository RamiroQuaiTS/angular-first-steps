import { Injectable, inject } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.inteface';

@Injectable({providedIn:'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:"Krilin",
    power:1000
  },{
    id: uuid(),
    name:"Goku",
    power:9500
  },{
    id: uuid(),
    name:"Vegueta",
    power:10000
  },{
    id: uuid(),
    name:"Bulma",
    power:123
  },{
    id: uuid(),
    name:"Yamcha",
    power:3
  },{
    id: uuid(),
    name:"Chaos",
    power:3344
  },{
    id: uuid(),
    name:"TenShinHan",
    power:8900
  }];

  //Esta función es para agrergar un nuevo caracter el cual se recibe desde un emmiter
  public addNewCharacter(character:Character):void{
    character.id = uuid();
    this.characters.push(character);
  }

  //Esta función es para borar un caracter que se recibe desde un emitter
  public deleteCharaterById(id:string):void{
    this.characters = this.characters.filter( ch => ch.id != id);
  }

  constructor() { }

}
