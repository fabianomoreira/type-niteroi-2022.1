import { Component } from '@angular/core';
import { Aluno } from './modelo/aluno.model';

@Component({
  selector: 'bol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos: Aluno[] = [
                     {nome: 'Diego', nota: 5, aprovado: true},
                     {nome: 'Fred', nota: 7, aprovado: true},
                     {nome: 'Renan', nota: 6, aprovado: true},
                     {nome: 'Julio', nota: 3, aprovado: false}       
                    ];
}
