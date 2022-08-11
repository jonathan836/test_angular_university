import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosServiceComponent } from './componentes/alumnos-service/alumnos-service.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { FailComponent } from './componentes/fail/fail.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfesoresServiceComponent } from './componentes/profesores-service/profesores-service.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { TablasComponent } from './componentes/tablas/tablas.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'alumnos', component:AlumnosComponent},
  {path:'profesores', component:ProfesoresComponent},
  {path:'tablas', component:TablasComponent},
  {path:'alumnosService', component:AlumnosServiceComponent},
  {path:'profesoresService', component:ProfesoresServiceComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:FailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
