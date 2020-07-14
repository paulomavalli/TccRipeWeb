import { Component, OnInit } from '@angular/core';
import { RipeService } from 'src/app/api/services/ripe.service';
import { ReportResponse } from 'src/app/api/models/report-response';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  data: any;
  pieChart: any;
  doughnut: any
  QuantityPositiveAnswer: string;
  QuantityNegativeAnswer: string;
  QuantityNullableAnswer: string;
  resultados: ReportResponse;
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
        }
      }]
    }
  }
  constructor(
    private ripeService: RipeService
  ) {
    this.doughnut = {
      labels: ['Nível 1','Nível 2','Nível 3','Nível 4','Nível 5'],
      datasets: [
          {
              data: [40, 38, 19, 2, 2],
              backgroundColor: [
                  "#4682B4",
                  "#4169E1",
                  "#054F77",
                  "#ADD8E6",
                  "#00BFFF"
              ],
              hoverBackgroundColor: [
                "#4682B4",
                "#4169E1",
                "#054F77",
                "#ADD8E6",
                "#00BFFF"
              ]
          }]    
      };
  }

  ngOnInit() {
    this.getInfo();
    
  }
  getInfo(){
    this.QuantityPositiveAnswer = localStorage.getItem('numerosPositivos');
    this.QuantityNegativeAnswer = localStorage.getItem('numerosNegativos');
    this.QuantityNullableAnswer = localStorage.getItem('numerosNulos');
    this.ripeService.getReport(this.QuantityPositiveAnswer, this.QuantityNegativeAnswer,
       this.QuantityNullableAnswer).subscribe(
        res => {
          this.resultados = res;
          const positivo = parseFloat(this.resultados.porcentagemRespostasPositivas);
          const negativo = parseFloat(this.resultados.porcentagemRespostasNegativas);
          const nulo = parseFloat(this.resultados.porcentagemRespostasNulas);
          console.log(this.resultados.recomendacoes.habits)
          console.log(positivo, negativo, nulo)
          this.pieChart = {
            labels: ['Sim', 'Não', 'Não se aplica'],
            datasets: [
              {
                data: [positivo, negativo, nulo],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
          this.data = {
            labels: ['Nivel de maturidade'],
            datasets: [
              {
                label: 'Minha Organização',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [this.resultados.nivelMaturidade]
              }
            ]
          };
        }
    );
    
  }
}
