import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantidadSociosComponent } from './components/cantidad-socios/cantidad-socios.component';
import { CargarArchivoComponent } from './components/cargar-archivo/cargar-archivo.component';
import { ListaCienComponent } from './components/lista-cien/lista-cien.component';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { ListaNombresComponent } from './components/lista-nombres/lista-nombres.component';
import { PromedioRacingComponent } from './components/promedio-racing/promedio-racing.component';

const routes: Routes = [
  {path: 'cargar-archivo', component: CargarArchivoComponent},
  {path: 'cantidad-socios', component: CantidadSociosComponent},
  {path: 'promedio-racing', component:PromedioRacingComponent},
  {path: 'lista-cien', component:ListaCienComponent},
  {path: 'lista-nombres', component:ListaNombresComponent},
  {path: 'lista-equipos', component:ListaEquiposComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cargar-archivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
