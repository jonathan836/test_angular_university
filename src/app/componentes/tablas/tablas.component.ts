import { Component, OnInit } from '@angular/core';
import { ALUMNOS } from 'src/app/interfaces/alumnoCollection';
import { PROFESORES } from 'src/app/interfaces/profesoresCollection';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  public nombre:string;
  public cedula:string;
  public semestre:string;
  public materia:string;
  public page:number;

  alumnos = ALUMNOS;
  profesores = PROFESORES;

  constructor() {

    this.nombre = "";
    this.cedula = "";
    this.semestre = "";
    this.materia = "";
    this.page = 1;

    this.alumnos = [

      {id: 1, nombre: "Jonathan"},
      {id: 2, nombre: "Richard"},
      {id: 3, nombre: "Ernesto"},
      {id: 4, nombre: "Luis"},
      {id: 5, nombre: "Antonio"},
      {id: 6, nombre: "Angel"}
    ];

    this.profesores = [

      {id: 1, nombre: "Julio"},
      {id: 2, nombre: "Briceño"},
      {id: 3, nombre: "De La Rosa"},
      {id: 4, nombre: "Ferrer"},
      {id: 5, nombre: "Hildren"},
      {id: 6, nombre: "Estela"}
    ];
  }

  ngOnInit(): void {
  }

}
