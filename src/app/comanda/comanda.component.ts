import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calcularTotal() {
    let resultado = 0;

    for (let producto of this.productos) {
      resultado += (producto.precio * producto.cantidad);
    }

    return resultado.toFixed(2);
  }

  onClickBorrar(pIndice) {
    if(this.productos[pIndice].cantidad > 1){
      this.productos[pIndice].cantidad--;
    } else{
      this.productos.splice(pIndice, 1);
    }
    
  }

}
