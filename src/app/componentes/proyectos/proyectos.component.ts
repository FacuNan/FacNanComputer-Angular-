import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
proyectos: Proyectos[]=[]
  constructor(private proyectoService:ProyectosService){}
  ngOnInit(): void {
    this.proyectoService.proyectos().subscribe(data =>{
      this.proyectos=data;
    })
  }

}
