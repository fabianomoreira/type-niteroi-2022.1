import { Component } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias!: Categoria[];

  constructor(private service: CategoriasService){}

  ngOnInit(){
    this.service.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }
}
