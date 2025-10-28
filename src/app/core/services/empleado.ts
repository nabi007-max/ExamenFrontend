import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empleado {
  
    private base = 'http://127.0.0.1:8000/api/empleados';
  constructor(private http:HttpClient){
  }
    listaempleado():Observable<any[]>
    {
    return this.http.get<any[]>(this.base);
    }
    crearempleado(data:any):Observable<any>
    {
    return this.http.post<any>(this.base, data);
    }
}
