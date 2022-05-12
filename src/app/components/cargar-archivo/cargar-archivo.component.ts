import { Component, OnInit, ViewChild } from '@angular/core';
import { SocioService } from 'src/app/services/socios.services';

@Component({
  selector: 'cargar-archivo',
  templateUrl: './cargar-archivo.component.html',
})


export class CargarArchivoComponent implements OnInit {
  title = 'cargar-archivo';

  cargados: boolean;

  constructor(private service: SocioService) {
    this.cargados = false;
  }

  ngOnInit(){
  }

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    this.service.getSocios($event.srcElement.files).subscribe(resultado => {
      this.cargados = true;
    });   
  
  }  

}

