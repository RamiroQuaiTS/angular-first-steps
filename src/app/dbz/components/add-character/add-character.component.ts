import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name:"",
    power:0
  };
  constructor() {

  }

  emitCharacter():void{
    if (this.character.name.length === 0 || this.character.power <= 0) return;
    console.log(this.character);
    this.onNewCharacter.emit(this.character)

    this.cleanCharacter();
  }

  cleanCharacter():void{
    this.character = {
      name:"",
      power:0
    }
  }

  ngOnInit(): void {
  }

}
