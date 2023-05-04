import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';
import { PropertyWrite } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public characterList: Character[] = [{name:"Trunks", power:2000}]

  @Output()
  public onDeleteCharacterEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteCharacter(id?:string):void{
    if (!id)return;
    this.onDeleteCharacterEmit.emit(id);
  }

}
