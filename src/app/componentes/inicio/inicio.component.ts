import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  empresa: Empresa = new Empresa("", "", "")
  constructor(private empresaService: EmpresaService){}
  ngOnInit(): void {
  this.empresaService.lista().subscribe(data =>{
   this.empresa= data[0]
  })
  }


}
