import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {todoModel} from './todo.store';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class todoService {
    constructor(private http: Http) { }
  fetchTodos(): Observable<todoModel[]> {
    return this.http.get('/todolist.json')
                  .map((res: Response) => res.json() as todoModel[]);
  }
}
