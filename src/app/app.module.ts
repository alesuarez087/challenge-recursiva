import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CargarArchivoComponent } from './components/cargar-archivo/cargar-archivo.component';
import { CantidadSociosComponent } from './components/cantidad-socios/cantidad-socios.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PromedioRacingComponent } from './components/promedio-racing/promedio-racing.component';
import { ListaCienComponent } from './components/lista-cien/lista-cien.component';
import { ListaNombresComponent } from './components/lista-nombres/lista-nombres.component';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CargarArchivoComponent,
    CantidadSociosComponent,
    PromedioRacingComponent,
    ListaCienComponent,
    ListaNombresComponent,
    ListaEquiposComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgxCsvParserModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
