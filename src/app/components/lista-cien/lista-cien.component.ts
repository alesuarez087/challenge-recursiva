import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/Socio';
import { SocioService } from 'src/app/services/socios.services';

@Component({
  selector: 'lista-cien',
  templateUrl: './lista-cien.component.html',
})

export class ListaCienComponent implements OnInit {
  title = 'lista-cien';

  socios: Socio[] = [];
  dataSource: MatTableDataSource<Socio>;
  displayedColumns = ['Nombre', 'Equipo', 'Edad'];

  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;

  constructor(private service: SocioService, private router: Router) {

    if(this.service.socios.length == 0 || this.service.socios == []){
      this.router.navigate(['/cargar-archivo'])  ;
    }

    this.socios = this.service.getListaCien();
    this.dataSource = new MatTableDataSource(this.socios);

  }

  ngOnInit(){
    
    this.dataSource.paginator = this.paginator;
    
  }
}

