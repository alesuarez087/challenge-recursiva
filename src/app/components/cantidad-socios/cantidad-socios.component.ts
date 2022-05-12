import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SocioService } from "src/app/services/socios.services";

@Component({
    selector: 'cantidad-socios',
    templateUrl: './cantidad-socios.component.html',
  })
  
  
export class CantidadSociosComponent {

  cantSocios: number = 0;

  constructor(private services: SocioService, private router: Router){
    if(this.services.socios.length == 0 || this.services.socios == []){
      this.router.navigate(['/cargar-archivo'])  ;
    }

    this.cantSocios = this.services.getCantidadSocios();
  }

  
}