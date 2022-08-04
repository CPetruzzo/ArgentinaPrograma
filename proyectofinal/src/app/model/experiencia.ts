export class Experiencia {
    id? : number;
    cargo: string;
    lugar: string;
    descripcion: string;
    f_inicio: string;
    f_fin: string;
    
    constructor(cargo: string, descripcion: string, lugar: string ,f_inicio: string, f_fin: string) {
   
        this.cargo = cargo;
        this.lugar = lugar;
        this.descripcion = descripcion;
        this.f_inicio = f_inicio;
        this.f_fin = f_fin;
    }    
}
