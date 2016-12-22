import { Component,OnInit } from '@angular/core';
import {todoComponent} from './todo.component';
import {todoModel} from './todo.store';
import {todoService} from './todo.service';

@Component({
  selector: 'my-app',
  template: `
        <todo *ngFor="let todo of todolist"
          [item]="todo">
          Loading...
        </todo>
      `,
  providers:[todoService]
})
export class AppComponent implements OnInit {
  constructor(private todoGetter:todoService) {}
  ngOnInit() {
    this.todoGetter.fetchTodos().subscribe((data)=>{
      console.log(data);
      this.todolist=data;
    });
  }
  todolist: todoModel[] = [
    {text: 'aasd'},
    {text: 'qwer'}
  ]
}
