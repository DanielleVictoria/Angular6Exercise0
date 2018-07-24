import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoAddComponent } from 'src/app/todo.module/dumb-components/todo.add.component';
import { ToDoDashboardComponent } from 'src/app/todo.module/smart-components/todo.dashboard.component';
import { ToDoCountComponent } from 'src/app/todo.module/dumb-components/todo.count.component';
import { ToDoDetailsComponent } from 'src/app/todo.module/dumb-components/todo.details.component';


@NgModule({
    declarations: [
        ToDoDashboardComponent,
        ToDoAddComponent,
        ToDoCountComponent,
        ToDoDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports : [
        ToDoDashboardComponent,
        ToDoAddComponent,
        ToDoCountComponent,
        ToDoDetailsComponent
    ]
  })

  export class ToDoModule {

  }