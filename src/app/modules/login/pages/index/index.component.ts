import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RipeService } from 'src/app/api/services/ripe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private ripeService: RipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.prepareForm();
  }
  prepareForm(){
    this.form = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  submitForm(){
    let loginRequest = {
      login: this.form.value.login,
      password: this.form.value.password
    }
    this.ripeService.postLogin(loginRequest).subscribe(
      res => {
        console.log(res)
        if(res.sucess === true) {
          localStorage.setItem('loginUsuario', this.form.value.login)
          console.log('salve');
          this.router.navigate(['/'])
        }
      },
      err =>  console.log(err)
    )
  }
}
