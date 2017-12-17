import { Component, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';
  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(false), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes);
   }

  ngOnInit() {
  }

}
