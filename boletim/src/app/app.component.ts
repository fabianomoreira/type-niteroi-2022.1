import { Component } from '@angular/core';
import { Aluno } from './modelo/aluno.model';

@Component({
  selector: 'bol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno1: Aluno = {nome: 'Diego', nota: 5, aprovado: true};
  aluno2: Aluno = {nome: 'Fred', nota: 7, aprovado: true};
  aluno3: Aluno = {nome: 'Renan', nota: 6, aprovado: true};
  aluno4: Aluno = {nome: 'Julio', nota: 3, aprovado: false};
}
