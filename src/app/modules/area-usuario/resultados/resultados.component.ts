import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  data: any;
  pieChart: any;
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
  constructor() {
    this.data = {
      labels: ['Organização', 'Conceito de Risco'],
      datasets: [
        {
          label: 'Minha Organização',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [2, 4]
        },
        {
          label: 'Organizações do mercado',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [3, 5]
        }
      ]
    };
    
    this.pieChart = {
      labels: ['Sim', 'Não', 'Não se aplica'],
      datasets: [
        {
          data: [300, 50, 100],
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
  }

  ngOnInit() {

  }

}
