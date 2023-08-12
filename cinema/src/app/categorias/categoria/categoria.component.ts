import { Component, Input } from '@angular/core';
import { Categoria } from './categoria.model';

@Component({
  selector: 'cin-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input() categoria!: Categoria;
}
