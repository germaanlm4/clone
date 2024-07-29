import { Component, Input } from '@angular/core';
import { Articulo } from '../lista-articulos/articulomodel';

@Component({
  selector: 'app-vista-articulo',
  standalone: true,
  imports: [],
  templateUrl: './vista-articulo.component.html',
  styleUrl: './vista-articulo.component.css'
})
export class VistaArticuloComponent {
  @Input() articulo: Articulo | null = null;
}
