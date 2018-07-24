import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/data/item';

@Component({
    selector: 'todo-details',
    templateUrl: './todo.details.component.html',
    styleUrls : ['./todo.details.component.css']
  })

export class ToDoDetailsComponent {
  
  @Input()
  item : Item;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  emitRemove() : void {
    this.remove.emit(this.item);
  }

  @Output()
  accomplish : EventEmitter<any> = new EventEmitter();

  emitAccomplish() : void {
    this.accomplish.emit(this.item);
  }
}