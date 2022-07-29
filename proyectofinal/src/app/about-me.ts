export class AboutMe{
    id?: number;
    apellido: string;
    nombre: string;

constructor(apellido: string, nombre: string){
    this.apellido = apellido;
    this.nombre = nombre;
}
}