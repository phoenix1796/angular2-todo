import {Component,Input}  from '@angular/core';
import {todoModel} from './todo.store'
@Component({
  selector:'todo',
  template:`
    <p>{{item.text}}</p>
  `,
})
export class todoComponent{
  @Input()
  item: todoModel
}
