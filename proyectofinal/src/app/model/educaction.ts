export class Educacion{
    id?: number;
    titulo: string;
    lugar: string;
    fecha_inicio: string;
    fecha_fin: string;

constructor(titulo: string, lugar: string, fecha_inicio: string, fecha_fin: string){
    this.titulo = titulo;
    this.lugar = lugar;
    this.fecha_fin = fecha_fin;
    this.fecha_inicio = fecha_inicio;
}
}