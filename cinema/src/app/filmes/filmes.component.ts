import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from './filme/filme.model';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'cin-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  filmes!: Filme[];

  constructor(private service: FilmesService, private route: ActivatedRoute){}

  ngOnInit(){
    this.service.listarFilmesPorCategoria(this.route.snapshot.params['id']).subscribe(filmes => this.filmes = filmes);
  }
}
