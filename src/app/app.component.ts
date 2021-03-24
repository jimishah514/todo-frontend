import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private api: ApiService) {
  //  this.api.helloWorld();
  //  this.api.postTodo();
  //  this.api.getTodos();
 }
}
