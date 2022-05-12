import { ISocio } from '../interfaces/ISocio';
import * as _ from 'lodash';

export class Socio {
    constructor(data: String){

        if(data != undefined){
            var renglon = data.split(';');
            this.nombre = renglon[0];
            this.edad = Number.parseInt(renglon[1]);
            this.equipo = renglon[2];
            this.estadoCivil = renglon[3];
            this.nivelEstudio = renglon[4];
        }
    }

    nombre: string = "";
    edad: number = 0;
    equipo: string= "";
    estadoCivil: string= "";
    nivelEstudio: string= "";

}