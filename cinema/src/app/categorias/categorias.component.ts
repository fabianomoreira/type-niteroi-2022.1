import { Component } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
<<<<<<< HEAD
  categorias!: Categoria[];

  constructor(private service: CategoriasService){}

  ngOnInit(){
    this.service.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }
=======
  categorias: Categoria[] = [
    {id: "1", titulo: "Terror", imagePath: "../../assets/dracula.png"},
    {id: "2", titulo: "Aventura", imagePath: "../../assets/climbing.png"},
    {id: "3", titulo: "Romance", imagePath: "../../assets/romance.png"},
    {id: "4", titulo: "Super Heróis", imagePath: "../../assets/superhero.png"}
  ]
>>>>>>> beb28bdc13c3610dce44d0af1b6d5c6903564779
}
