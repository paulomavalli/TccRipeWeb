import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioComponent } from './questionario/questionario.component';
import { ResultadosComponent } from './resultados/resultados.component';


const routes: Routes = [
  { path: '', component: QuestionarioComponent },
  { path: 'resultados', component: ResultadosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaUsuarioRoutingModule { }
