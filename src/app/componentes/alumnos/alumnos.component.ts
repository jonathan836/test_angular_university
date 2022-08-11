import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { ALUMNOS } from 'src/app/interfaces/alumnoCollection';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  
    public nombre:string;
    public cedula:string;
    public semestre:string;
    public materia:string;
  

  // alumnos:any[];
  // alumnos:{id:number, nombre:string};
  // alumnos: Alumnos[];
    alumnos = ALUMNOS;

  constructor() {

    
      this.nombre = "Jonathan";
      this.cedula = "123456";
      this.semestre = "Septimo";
      this.materia = "Programación";
      
    
      // this.alumno = [{id: 1, nombre: "Jonathan"}];
      this.alumnos = [

        {id: 1, nombre: "Jonathan"},
        {id: 2, nombre: "Richard"},
        {id: 3, nombre: "Ernesto"},
        {id: 4, nombre: "Luis"}
      ];
    

    // this.alumnos = {id: 1, nombre: "Jonathan"};
  }

  ngOnInit(): void {
  }

  onClickAlumno(alumno:Alumnos):void{
    
    alert("Probando el evento click, presionanndo el registro "+alumno.nombre);
  }

  onClickAgregar():void{
    
    alert("Alumno agregado exitosamente");
  }

  onClickEliminar():void{
    
    alert("Alumno eliminado exitosamente");
  }

}
