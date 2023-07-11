import { Component } from '@angular/core';

@Component({
  selector: 'esc-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  aluno = {nome: 'Renan', situacao: 'Reprovado', isAprovado: false};
}
