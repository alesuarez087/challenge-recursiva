import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/Socio';
import { SocioService } from 'src/app/services/socios.services';

@Component({
  selector: 'lista-equipos',
  templateUrl: './lista-equipos.component.html',
})


export class ListaEquiposComponent implements OnInit {
  title = 'lista-equipos';

  objetos: any[] = [];
  
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['Equipo', 'PromedioEdad', 'MenorEdad', 'MayorEdad'];

  constructor(private service: SocioService, private router: Router) {

    if(this.service.socios.length == 0 || this.service.socios == []){
      this.router.navigate(['/cargar-archivo'])  ;
    }

    this.objetos = this.service.getResumenEquipos();
    this.dataSource = new MatTableDataSource(this.objetos);
  }

  ngOnInit(){
    
  }
}

