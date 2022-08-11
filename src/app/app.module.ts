import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { HomeComponent } from './componentes/home/home.component';
import { FailComponent } from './componentes/fail/fail.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosServiceComponent } from './componentes/alumnos-service/alumnos-service.component';
import { ProfesoresServiceComponent } from './componentes/profesores-service/profesores-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesoresComponent,
    HomeComponent,
    FailComponent,
    TablasComponent,
    PruebaComponent,
    AlumnosServiceComponent,
    ProfesoresServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
