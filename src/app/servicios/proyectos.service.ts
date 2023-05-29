import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url= "http://localhost:8080/panificados"

  constructor(private http:HttpClient) { }

  public proyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url + "/proyectos")
  }

  public detalles(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + `/detalles/${id}`);
  }

  public crear(proyecto: Proyectos):Observable<any>{
    return this.http.post<any>(this.url + "/create", proyecto);
  }


  public editar(id: number, proyecto:Proyectos):Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, proyecto);
  }
}