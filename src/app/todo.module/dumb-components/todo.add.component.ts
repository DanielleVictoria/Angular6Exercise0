import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/data/item';

@Component({
    selector: 'todo-add',
    templateUrl: './todo.add.component.html',
    styleUrls : ['./todo.add.component.css']
  })

export class ToDoAddComponent {
  
  @Input()
  lastId : number;

  @Output()
  add : EventEmitter <any> = new EventEmitter;

  item : Item;

  createItem (title : string, status : string, notes : string) : void {
    this.item = {
      id : ++this.lastId,
      title : title,
      status : status,
      notes : notes
    };
    this.emitAdd();
  }

  emitAdd() : void {
    this.add.emit(this.item);
  }

}