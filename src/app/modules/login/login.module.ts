import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './pages/index/index.component';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule
  ],
  exports: [
    IndexComponent
  ]
})
export class LoginModule { }
