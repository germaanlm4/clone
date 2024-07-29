import { Component, EventEmitter, Output } from '@angular/core';
import { Articulo } from './articulomodel';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css'
})
export class ListaArticulosComponent {
  @Output() seleccionarArticulo = new EventEmitter<Articulo>();

  articulos: Articulo[] = [
    { id: 1, nombre: 'Artículo 1', descripcion: 'Descripción del artículo 1' },
    { id: 2, nombre: 'Artículo 2', descripcion: 'Descripción del artículo 2' },
    { id: 3, nombre: 'Artículo 3', descripcion: 'Descripción del artículo 3' }
  ];
articulo: Articulo | undefined;


  onSelect(articulo: Articulo) {
    this.seleccionarArticulo.emit(articulo);
  }
}
