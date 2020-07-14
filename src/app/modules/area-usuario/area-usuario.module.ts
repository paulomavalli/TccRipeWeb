import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AreaUsuarioRoutingModule } from './area-usuario-routing.module';
import { ResultadosComponent } from './resultados/resultados.component';
import { QuestionarioComponent } from './questionario/questionario.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChart } from './resultados/angular2-google-chart.directive';
import {ChartModule} from 'primeng/chart';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderRipeModule } from 'src/app/shared/header-ripe/header-ripe.module';


@NgModule({
  declarations: [ResultadosComponent,
    GoogleChart,
     QuestionarioComponent],
  imports: [
    CommonModule,
    AreaUsuarioRoutingModule,
    MatInputModule,
    MatStepperModule,
    
    ReactiveFormsModule,
    MatButtonModule,
    GoogleChartsModule,
    ChartModule,
    MatRadioModule,
    HeaderRipeModule
  ]
})
export class AreaUsuarioModule { }
