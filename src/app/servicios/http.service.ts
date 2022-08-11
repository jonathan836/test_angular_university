import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL:string = "http://localhost:3000/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  // Create
  create(data:any, tipo:string):Observable<any> {
    let API_URL = `${this.apiURL + tipo}`;
    return this.http.post(API_URL, data).pipe(catchError(this.handleError))
  }

  // Read
  list(tipo:string) {
    return this.http.get(`${this.apiURL + tipo}`);
  }

  // Update
  update(id:any, data:any, tipo:string): Observable<any>{
    let API_URL = `${this.apiURL + tipo}/${id}`;
    return this.http.put(API_URL, data, {headers: this.headers}).pipe(catchError(this.handleError))
  }

  // Delete
  delete(id:any, tipo:string): Observable<any>{
    var API_URL = `${this.apiURL + tipo}/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.handleError))
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    }

    else{
      console.error(
        `Backend returned code ${error.status},` + 
        `body was: ${error.error}`
      );
    }

    return throwError(
      'Something bad happened; please try again later.'
    );
  };
}
