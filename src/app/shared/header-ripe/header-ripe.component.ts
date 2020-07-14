import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-ripe',
  templateUrl: './header-ripe.component.html',
  styleUrls: ['./header-ripe.component.scss']
})
export class HeaderRipeComponent implements OnInit {
  login: string;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('loginUsuario')){
      this.login = localStorage.getItem('loginUsuario');
    } else {
      this.login = 'Login';
    }
  }

}
