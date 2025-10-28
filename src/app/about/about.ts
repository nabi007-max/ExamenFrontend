import { Component } from '@angular/core';
import { Empleado } from '../core/services/empleado';
//import { error } from 'console';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class about {

  empleado:any[]=[];
  nuevoempleado= {nombre:'',apellido:'',correo:'', sueldo:''};
  constructor(private empleados:Empleado)
  {
        this.listaempleado();
  }
  listaempleado():void
  {
    this.empleados.listaempleado().subscribe({
          next:(data)=>{
            this.empleado=data
            console.log(this.empleado);
          },
            error:(err)=>console.error('error al cargar producto',err)
    });
  }
  crearempleado():void{
    if(!this.nuevoempleado.nombre||!this.nuevoempleado.apellido||!this.nuevoempleado.correo||!this.nuevoempleado.sueldo)
    {
      alert('completa los datos');
      return;
    }
    this.empleados.crearempleado(this.nuevoempleado).subscribe
    ({
      next: (res)=>
      {
          alert('Empleado Creado satisfactoriamente');
          this.nuevoempleado = {nombre:'',apellido:'',correo:'',sueldo:''};
          this.listaempleado();
      },
      error: (err) =>console.error('Error al registrar Producto',err)
    });
  }


}