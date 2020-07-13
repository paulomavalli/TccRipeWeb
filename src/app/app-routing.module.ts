import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: '../app/modules/login/login.module#LoginModule',
  },
  {
    path: '',
    loadChildren: '../app/modules/home/home.module#HomeModule',
  },
  {
    path: 'questionario',
    loadChildren: '../app/modules/area-usuario/area-usuario.module#AreaUsuarioModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
