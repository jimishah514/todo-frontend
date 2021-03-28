import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input() todo;
@Output() todoChange = new EventEmitter();
editTodo: any = { id: '' };
  constructor() { }

  ngOnInit() {
  }

  updateTodoStatus(todo){
    this.todoChange.emit({todo: todo, action: "updateStatus"});
  }

  updateTodo(todo){
    debugger
    this.todoChange.emit({todo: todo, action: "update"});
  }

  hasEditTodo(todo){
    this.editTodo = todo;
  }

  deleteTodo(todo){
    this.todoChange.emit({todo: todo, action: "delete"});
  }

}
