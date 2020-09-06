export class Producto {

    nombre: string;
    precio: number;
    imagen: string;
    cantidad: number;

    constructor(pNombre = '', pPrecio = 0.0, pImagen = ''){
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.imagen = pImagen;
        this.cantidad = 1;
    }
    
    descripcion(){
        return `${this.nombre} ${this.precio}€`;
    }

}