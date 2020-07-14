import { Component, OnInit } from '@angular/core';
import { RipeService } from 'src/app/api/services/ripe.service';
import { QuestionResponse } from 'src/app/api/models/question-response';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  teste: QuestionResponse;
  login: string
  constructor(private ripeService: RipeService) { }

  ngOnInit() {
    this.ripeService.postLogin({login: 'string', password:'string'});
    this.ripeService.getQuestao("string");
    
  }
  botaoSend() {
    console.log('botao clicado!!')
    this.ripeService.getQuestao("string").subscribe(
      res => {
        this.teste = res;
      }
    );
      console.log(this.teste)
  }
}
