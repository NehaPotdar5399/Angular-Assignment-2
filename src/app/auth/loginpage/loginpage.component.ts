import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
    submitted = false;
    /*Regular Expression for Email and Password validation*/
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
    passwordPattern =
      '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';
    loginForm=new FormGroup({
          email:new FormControl("",[Validators.required,Validators.pattern(this.emailPattern)]),
          pass:new FormControl("",[Validators.required,Validators.pattern(this.passwordPattern)]),
        });
    constructor(
      private loginService : LoginServiceService,
      private router : Router,
      ) {}
    ngOnInit(): void {    }
    checkResponse=false
    login() {
      console.log(this.loginForm.value.email,this.loginForm.value.pass)
      this.loginService.checkUser(this.loginForm.value.email,this.loginForm.value.pass)
      this.checkResponse=true
    }
    get email(){
      return this.loginForm.get('email');
    }
    get pass(){
      return this.loginForm.get('pass');
    }
  }

