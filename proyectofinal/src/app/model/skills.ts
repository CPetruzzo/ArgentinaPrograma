export class Skills {
    id?: number;
    img: string;
    skill: string;
    descripcion: string;

constructor(img: string, skill: string, descripcion: string) {
    this.img = img;
    this.skill = skill;
    this.descripcion = descripcion;
}
}