import { Component, Input } from '@angular/core';

@Component({
  selector: 'esc-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  @Input() mensagem: string = '';
  aluno = {nome: 'Renan', situacao: 'Aprovado', isAprovado: true};

  ngOnInit(){
    console.log('ngOninit acionado');
  }

  exibir(){
    console.log('Mensagem exibida!');
    console.log(this.mensagem);
  }

  atualizar(value: string){
    this.mensagem = this.mensagem + value;
  }
}
