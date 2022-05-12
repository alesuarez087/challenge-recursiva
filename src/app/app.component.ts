import { Component, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Socio } from './models/Socio';
import { SocioService } from './services/socios.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'challenge-recursiva';

  constructor() {
  }

  ngOnInit(){
   
  } 

}

