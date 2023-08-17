import { Component, Input } from '@angular/core';
import { Filme } from './filme.model';

@Component({
  selector: 'cin-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  @Input() filme!: Filme;
}
