import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRipeComponent } from './header-ripe.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderRipeComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    HeaderRipeComponent
  ]
})
export class HeaderRipeModule { }
