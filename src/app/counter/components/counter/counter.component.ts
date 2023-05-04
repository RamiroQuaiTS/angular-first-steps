import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="increaseBY(1)">+1</button>
  <button (click)="increaseBY(-1)">-1</button>
  <button (click)="Reset()">Reset</button>
  <p>Esto es otro ejemplo de una referencia a ts con un contador que tiene el valor de {{counter}}</p>
  `
})

export class CounterComponet implements OnInit {
  constructor() { }
  public counter: number = 0;

  public increaseBY(value:number):void{
    this.counter += value;
}

  public Reset():void{
  this.counter = 0;
}

  ngOnInit() { }
}
