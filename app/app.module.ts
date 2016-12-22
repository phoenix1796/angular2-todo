import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {todoComponent} from './todo.component'
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent,todoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
