import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-profesores-service',
  templateUrl: './profesores-service.component.html',
  styleUrls: ['./profesores-service.component.css']
})
export class ProfesoresServiceComponent implements OnInit {

  todoList:any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit():void{
    this.listTodos();
  }

  listTodos(){
    this.httpService.list("profesoresService").subscribe((response) => {
      this.todoList = response;
    }, (error => {

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      // title: `Some Todo`
      title: prompt("Ingrese el nombre: ")
    }
  
    this.httpService.create(todo, "profesoresService").subscribe((response) => {
      this.listTodos();
    }, (error => {
  
    }));
  }

  editTodo(todo:any){
    let data = {
      // id: new Date().getTime(),
      // title: `Some Todo`

      id: todo.id,
      title: prompt("Ingrese su nombre: ")
    }

    this.httpService.update(todo.id, data, "profesoresService").subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }

  deleteTodo(id:any){
    this.httpService.delete(id, "profesoresService").subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }
}
