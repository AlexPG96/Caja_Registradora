import { Component } from '@angular/core';
import { Producto } from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      new Producto('Cocido', 6.54, 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
      new Producto('Paella', 12.50, 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/09/Paella-mixta-con-marisco-carne-y-verduras.-Receta-de-arroz-deliciosa.jpg'),
    ];

    this.arrBebida = [
      new Producto('agua', 3.68, 'https://us.123rf.com/450wm/31moonlight31/31moonlight311612/31moonlight31161200130/67846902-salpicaduras-de-agua-en-colores-azules-alrededor-de-una-botella-de-pl%C3%A1stico-azul-con-agua-mineral-bote.jpg?ver=6'),
      new Producto('coca-cola', 1.75, 'https://www.encopadebalon.com/3507-thickbox_default/coca-cola-pack-24-botellas-20cl.jpg'),
    ]
  }

  onProductoSeleccionado($event) {
    //Compruebo si el producto está
    //Si está
    //Sumar 1 a la cantidad
    //Si no

     const productoEncontrado = this.productosSeleccionados.find((producto) => {
       return producto.nombre === $event.nombre;
     })

    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else {
      this.productosSeleccionados.push($event);
      console.log(this.productosSeleccionados)
    }
    
    
  }

}
