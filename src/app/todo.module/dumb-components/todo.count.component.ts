import { Component, Input } from '@angular/core';
import { Item } from 'src/app/data/item';

@Component({
    selector: 'todo-count',
    templateUrl: './todo.count.component.html',
    styleUrls: ['./todo.count.component.css']
})

export class ToDoCountComponent {

  @Input()
  items : Item[];

  @Input()
  countAccomplished : number;
}