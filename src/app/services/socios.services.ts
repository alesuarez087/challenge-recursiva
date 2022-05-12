import { Socio } from './../models/Socio';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import * as _ from 'lodash';
import { Observable, Subject } from 'rxjs';
import { keys, round } from 'lodash';



@Injectable({providedIn:'root'})
export class SocioService {

    socios: Socio[] = [];
    private observable = new Subject<Socio[]>();

    csvRecords: any;

    constructor(private ngxCsvParser: NgxCsvParser, private http: HttpClient) { }

    getSocios(files: any[]): Observable<Socio[]>{
        this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' }).pipe().subscribe({
            next: (result): void => {
                _.forEach(result, r=> {
                    let socio = new Socio(r[0]);
                    this.socios.push(socio);
                });
                this.observable.next(this.socios);
            },
            error: (error: NgxCSVParserError): void => {
                console.log('Error', error);
            }
        });

        return this.observable;
    }

    getCantidadSocios(): number{
        return this.socios.length;
    }

    getPromedioSociosRacing(): number{
        var equipo = this.socios.filter(s=>s.equipo == 'Racing');
        var anios = 0
        equipo.forEach(e=>{
            anios = e.edad + anios;
        })
        return round(anios/equipo.length);
    }

    getListaCien(): Socio[]{
        var filtro = this.socios.filter(s=>s.estadoCivil=='Casado' && s.nivelEstudio=='Universitario')
                                .sort(function(a,b){
                                    if(a.edad < b.edad) return -1
                                    else if (a.edad > b.edad) return 1
                                    else return 0
                                });

        var top100:Socio[] = [];
        for(let i = 0; i<100;i++){
            top100.push(filtro[i])
        }

        return top100;
    }

    
    getTop5NombreRiver(): Object[]{
        var objeto: Object[] = [];

        var filtro:Socio[] = this.socios.filter(s=>s.equipo=='River');

        var grupos = _.groupBy(filtro, function(socio){ return socio.nombre })       

        var orden = _.orderBy(grupos, function(socio) { return socio.length }, 'desc');   
        
        for(let i=0;i<5;i++){
            objeto.push({nombre: orden[i][0].nombre , cantidad: orden[i].length})
        }
        
        return objeto;
    }

    getResumenEquipos(){
        var objetos: any[] = [];

        var equipos = _.groupBy(this.socios, function(socio){ return socio.equipo })

        var ordenados = _.orderBy(equipos, function(socio){ return socio.length }, 'desc');

        _.forEach(ordenados, o=>{
            var suma = 0;
            var menor = 9999;
            var mayor = 0
            o.forEach(os=>{
                suma += os.edad;
                if(menor > os.edad) menor = os.edad;
                if(mayor < os.edad) mayor = os.edad;
            })

            objetos.push({equipo: o[0].equipo, promedioEdad: round(suma/o.length, 2), menorEdad: menor, mayorEdad: mayor})
        });

        return objetos;

    }
    
}