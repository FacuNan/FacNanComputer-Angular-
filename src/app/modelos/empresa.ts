export class Empresa {
    id?:number;
    nombre:String;
    sobre_nosotros:String;
    imagen: String;


    constructor(nombre:String, sobre_nosotros:String, imagen:String){
        this.nombre=nombre;
        this.sobre_nosotros= sobre_nosotros;
        this.imagen=imagen;
    }
}
