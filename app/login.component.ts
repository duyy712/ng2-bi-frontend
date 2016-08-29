import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import {Control, ControlGroup, CORE_DIRECTIVES, FORM_DIRECTIVES, Validators } from '@angular/common';
import {FormControl, FormGroup, FormControlName} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [LoginService]

})
export class LoginComponent {

  constructor(public loginService: LoginService, public router: Router) { }
  error: boolean = false;

  ctrlUsr: Control = new Control();
  ctrlPwd: Control = new Control();

  @Input() loginForm: ControlGroup = new ControlGroup({
    username: this.ctrlUsr,
    password: this.ctrlPwd
  })

  getValue(): string {
    return JSON.stringify(this.loginForm.value, null, 2);
  }

  onSubmit() {

    this.loginService.login(this.ctrlUsr.value, this.ctrlPwd.value)
      .subscribe((token: any) => {
        this.router.navigate(['/report']);
      },
      () => { this.error = true; }
      );
  }
}

