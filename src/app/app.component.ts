import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './components/lista-articulos/articulomodel';
import { VistaArticuloComponent } from "./components/vista-articulo/vista-articulo.component";
import { ListaArticulosComponent } from "./components/lista-articulos/lista-articulos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VistaArticuloComponent, ListaArticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;
  selectedArticulo: Articulo | null = null;

  onArticuloSeleccionado(articulo: Articulo) {
    this.selectedArticulo = articulo;
  }
}
