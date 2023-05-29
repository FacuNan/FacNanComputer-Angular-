import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
 url ="http://localhost:8080/empresa"
  constructor(private http: HttpClient) { }

public lista():Observable<Empresa[]>{
  return this.http.get<Empresa[]>(this.url + "/informacion");
}

public detalles(id: number):Observable<Empresa>{
  return this.http.get<Empresa>(this.url + `/detalles/${id}`);
}

public crear(empresa: Empresa):Observable<any>{
  return this.http.post<any>(this.url + "/create", empresa);
}


public eliminar(id: number):Observable<any>{
  return this.http.delete<any>(this.url + `/delete/${id}`);
}
  
public update(id: number, empresa:Empresa):Observable<any>{
  return this.http.put<any>(this.url + `/update/${id}`, empresa);
}

}
