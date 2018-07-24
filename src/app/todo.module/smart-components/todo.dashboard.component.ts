import { Component, OnInit } from '@angular/core';

import { Item } from '../../data/item';

@Component({
    selector: 'todo-dashboard',
    templateUrl: './todo.dashboard.component.html'
  })

export class ToDoDashboardComponent {
  
  items : Item[];
  countAccomplished : number = 0;
  
  constructor() {
  }

  ngOnInit() {
    this.items = [{
      id : 1,
      title : "Learn Angular",
      status : "Ongoing",
      notes : "Even though you dunno that much about web programming, it's okay. You got this. Self Hug <3"
    }, {
      id : 2,
      title : "Listen to Blackpink",
      status : "Ongoing",
      notes : "In this house, we stan queens"
    }, {
      id : 3,
      title : "Play Fallout4",
      status : "Ongoing",
      notes : "Going back for mah boi Shaun"
    },{
      id : 4,
      title : "Listen to Red Velvet",
      status : "Ongoing",
      notes : "Bae Irene and Kang Seulgi are the dream. In this house, we stan a visual couple"
    }];

    this.checkAccomplish ();
  }

  // event handler upon clicking Remove
  handleRemove(event : Item) : void {
    this.items = this.items.filter((item : Item) => {
      return item.id != event.id;
    });
  }

  // event handler upon cliking Done
  handleAccomplish (event : Item) : void {
    //mark it as accomplished
    for (let item of this.items) {
      if (item.id == event.id) {
        item.status = "Accomplished";
      }
    }
    //delete it from the list
    this.checkAccomplish();
  }

  // makes sure lists only contains Ongoing
  checkAccomplish() : void {
    this.items = this.items.filter((item : Item) => {
      if (item.status == "Accomplished") {
        ++this.countAccomplished;
      }
      return item.status == "Ongoing";
    });
  }

  handleAdd (event : Item) : void {
    this.items.push (event);

    //check if the one added is marked as accomplished
    //if so. delete and increase counter
    this.checkAccomplish();
  }

}