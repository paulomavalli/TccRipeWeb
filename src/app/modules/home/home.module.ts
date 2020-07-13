import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class HomeModule { }
