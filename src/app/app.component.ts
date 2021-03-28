import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private api: ApiService,private router: Router) {
    this.api.helloWorld().then(res =>{
      console.log("server Response : ",res);
    }
      
    );
  //  this.api.postTodo();
  //  this.api.getTodos();
 }

 routerNavigator(path){
   if(path === 'login'){
    this.router.navigate(['/','login'])
   } else if (path === 'register') {
    this.router.navigate(['/','register'])
   }
 }
}
