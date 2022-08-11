import { Component, OnInit } from '@angular/core';
import { Profesores } from 'src/app/interfaces/profesores';
import { PROFESORES } from 'src/app/interfaces/profesoresCollection';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public nombre:string;
  public materia:string;

  profesores = PROFESORES;

  constructor() {

    this.nombre = "Carlos Ferres";
    this.materia = "Redes";

    this.profesores = [

      {id: 1, nombre: "Julio"},
      {id: 2, nombre: "Briceño"},
      {id: 3, nombre: "De La Rosa"},
      {id: 4, nombre: "Ferrer"}
    ];
  }

  ngOnInit(): void {
  }

  onClickProfesor(profesor:Profesores):void{
    
    alert("Probando el evento click, presionanndo el registro "+profesor.nombre);
  }

  onClickAgregar():void{
    
    alert("Profesor agregado exitosamente");
  }

  onClickEliminar():void{
    
    alert("Profesor eliminado exitosamente");
  }

}
