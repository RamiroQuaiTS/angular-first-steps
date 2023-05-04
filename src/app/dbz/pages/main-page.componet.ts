import { Character } from './../interfaces/character.inteface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) { }

  get getCharacter(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharaterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addNewCharacter(character);
  }

  ngOnInit() { }
}
