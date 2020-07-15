import { Component, OnInit } from '@angular/core';
import { RipeService } from 'src/app/api/services/ripe.service';
import { QuestionResponse } from 'src/app/api/models/question-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  teste: QuestionResponse;
  login: string
  constructor(private ripeService: RipeService,
    private router: Router) { }

  ngOnInit() {
    this.ripeService.postLogin({login: 'string', password:'string'});
    this.ripeService.getQuestao("string");
    
  }
  botaoSend() {
    if(localStorage.getItem('loginUsuario')){
      this.router.navigate(['questionario']);
    } else {
      this.router.navigate(['login']);
    }
}
}
