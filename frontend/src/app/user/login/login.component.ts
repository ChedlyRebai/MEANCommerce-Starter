import { User } from 'src/app/model/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?:User;
  constructor(private auth:AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  errorMessage?:any;
  token?:any;
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(){
    this.user = this.loginform.value;
    this.auth.login(this.user).subscribe(
      (res)=>{

        this.router.navigate(['']);
          this.token=res;
          console.log(res)
          console.log(this.token);
          localStorage.setItem('token',this.token.token)
        

      },(error)=>{
        if (error instanceof HttpErrorResponse) {
            this.errorMessage = error.error.message;
        }
      }
    )
  }







}
