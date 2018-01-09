import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';

  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes);

   }

   ngOnChanges(){
     if(this.tentativas != this.coracoes.length){
       let index = this.coracoes.length - this.tentativas;
       this.coracoes[index - 1].cheio = false;
     }

   }

  ngOnInit() {
    
  }

}
