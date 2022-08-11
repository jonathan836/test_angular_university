import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-alumnos-service',
  templateUrl: './alumnos-service.component.html',
  styleUrls: ['./alumnos-service.component.css']
})
export class AlumnosServiceComponent implements OnInit {

  todoList:any = [];
  public page:number;

  constructor(private httpService: HttpService) {
    this.page = 1;
  }

  ngOnInit():void{
    this.listTodos();
  }

  listTodos(){
    this.httpService.list("alumnos").subscribe((response) => {
      this.todoList = response;
    }, (error => {

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      // title: `Some Todo`
      nombre: prompt("Ingrese el nombre: ")
    }
  
    this.httpService.create(todo, "alumnos").subscribe((response) => {
      this.listTodos();
    }, (error => {
  
    }));
  }

  editTodo(todo:any){
    let data = {
      // id: new Date().getTime(),
      // title: `Some Todo`

      id: todo.id,
      nombre: prompt("Ingrese el nombre: ")
    }

    this.httpService.update(todo.id, data, "alumnos").subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }

  deleteTodo(id:any){
    this.httpService.delete(id, "alumnos").subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }

}
