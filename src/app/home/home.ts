import { Component } from '@angular/core';
import { Empleado} from '../core/services/empleado';
//import { error } from 'console';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  empleado:any[]=[];
  constructor(private empleados:Empleado)
  {
        this.listaempleado();
  }
  listaempleado():void
  {
    this.empleados.listaempleado().subscribe({
          next:(data)=>{
            this.empleado=data
            console.log(this.empleados);
          },
            error:(err)=>console.error('error al cargar producto',err)
    })
  }
  


}