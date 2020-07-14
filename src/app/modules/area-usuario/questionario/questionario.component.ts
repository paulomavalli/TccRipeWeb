import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RipeService } from 'src/app/api/services/ripe.service';
import { QuestionResponse } from 'src/app/api/models/question-response';
import { Survey } from 'src/app/api/models/type-questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  primeiroFormGroup: FormGroup;
  segundoFormGroup: FormGroup;
  terceiroFormGroup: FormGroup;
  quartoFormGroup: FormGroup;
  quintoFormGroup: FormGroup;
  sextoFormGroup: FormGroup;
  setimoFormGroup: FormGroup;
  oitavoFormGroup: FormGroup;
  nonoFormGroup: FormGroup;
  decimoFormGroup: FormGroup;
  positivo: number = 0;
  negativo: number = 0;
  nulo: number = 0;
  isEditable = false;
  validateUser: string;
  questoes: QuestionResponse;
  teste: Survey[];
  constructor(
    private _formBuilder: FormBuilder,
    private ripeService: RipeService,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.primeiroFormGroup = this._formBuilder.group({
      primeiroCtrl: ['', Validators.required]
    });
    this.segundoFormGroup = this._formBuilder.group({
      segundoCtrl: ['', Validators.required]
    });
    this.terceiroFormGroup = this._formBuilder.group({
      terceiroCtrl: ['', Validators.required]
    });
    this.quartoFormGroup = this._formBuilder.group({
      quartoCtrl: ['', Validators.required]
    });
    this.quintoFormGroup = this._formBuilder.group({
      quintoCtrl: ['', Validators.required]
    });
    this.sextoFormGroup = this._formBuilder.group({
      sextoCtrl: ['', Validators.required]
    });
    this.setimoFormGroup = this._formBuilder.group({
      setimoCtrl: ['', Validators.required]
    });
    this.oitavoFormGroup = this._formBuilder.group({
      oitavoCtrl: ['', Validators.required]
    });
    this.nonoFormGroup = this._formBuilder.group({
      nonoCtrl: ['', Validators.required]
    });
    this.decimoFormGroup = this._formBuilder.group({
      decimoCtrl: ['', Validators.required]
    });
    this.prepareQuestions();
  }
  prepareQuestions(){
    this.validateUser = localStorage.getItem('loginUsuario')
    this.ripeService.getQuestao(this.validateUser).subscribe(
      res => {
        this.questoes = res;
        this.teste = res.survey
        console.log(res)
        console.log(res.survey[0].questionDescription)
      }
    )
  }
  add(numero: number){
    if(numero === 1){
      this.positivo++;
    }
    if(numero === 2){
      this.negativo++;
    }
    if(numero === 3){
      this.nulo++;
    }
  }
  submitForm(){
    localStorage.setItem('numerosPositivos', this.positivo.toString());
    localStorage.setItem('numerosNegativos', this.negativo.toString());
    localStorage.setItem('numerosNulos', this.nulo.toString());
    this.router.navigate(['/questionario/resultados']);
  }

}
