export class Proyectos {
    id?: number;
    nombreProyecto: String;
    link: String;
    img: String;
    descripcion: String;

    constructor(nombreProyecto: String, link: String, img: String, descripcion: String) {
        this.nombreProyecto = nombreProyecto;
        this.link=link;
        this.img=img;
        this.descripcion=descripcion;

    }
}
