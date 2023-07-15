import { Component, Input } from '@angular/core';
import { Aluno } from '../modelo/aluno.model';

@Component({
  selector: 'bol-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  @Input() aluno!: Aluno;
}
