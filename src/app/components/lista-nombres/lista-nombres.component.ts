import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/Socio';
import { SocioService } from 'src/app/services/socios.services';

@Component({
  selector: 'lista-nombres',
  templateUrl: './lista-nombres.component.html',
})


export class ListaNombresComponent implements OnInit {
  title = 'lista-nombres';

  objetos: any[] = [];

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['Nombre', 'Cantidad'];
  
  constructor(private service: SocioService, private router: Router) {

    if(this.service.socios.length == 0 || this.service.socios == []){
      this.router.navigate(['/cargar-archivo'])  ;
    }

    this.objetos = this.service.getTop5NombreRiver();
    this.dataSource = new MatTableDataSource(this.objetos);
  }

  ngOnInit(){
    
  }
}

