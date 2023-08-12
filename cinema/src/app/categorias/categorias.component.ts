import { Component } from '@angular/core';
import { Categoria } from './categoria/categoria.model';

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: Categoria[] = [
    {id: "1", titulo: "Terro", imagePath: "../../assets/dracula.png"},
    {id: "2", titulo: "Aventura", imagePath: "../../assets/climbing.png"},
    {id: "3", titulo: "Romance", imagePath: "../../assets/romance.png"}
  ]
}
