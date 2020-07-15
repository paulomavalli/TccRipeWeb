import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ripe',
  templateUrl: './header-ripe.component.html',
  styleUrls: ['./header-ripe.component.scss']
})
export class HeaderRipeComponent implements OnInit {
  login: string;
  logOn = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('loginUsuario')){
      this.login = localStorage.getItem('loginUsuario');
      this.logOn = true;
    } else {
      this.login = 'Login';
      this.logOn = false;
    }
  }
  logout(){
    localStorage.removeItem('loginUsuario');
    this.router.navigate(['/login']);
    this.logOn = false;
  }

}
