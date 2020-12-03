import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  datosUsuario = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(form) {
    // console.log(form);
    console.log(form.value)
  }

}
