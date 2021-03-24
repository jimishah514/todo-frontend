import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //apiDomain = 'serene-citadel-01484.herokuapp.com';
  apiDomain = 'http://localhost:8080';

  helloWorld() {
    debugger
    try {
      return this.http.get(`${this.apiDomain}/`).toPromise();
    } catch {
      throw Error;
    }
  }

  postTodo() {
    debugger
    try {
      return this.http.post(`${this.apiDomain}/todo`,'').toPromise();
    } catch {
      throw Error;
    }
  }

  getTodos() {
    debugger
    try {
      return this.http.get(`${this.apiDomain}/todos`).toPromise();
    } catch {
      throw Error;
    }
  }
}