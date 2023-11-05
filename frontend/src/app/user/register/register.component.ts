import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser!:User;
errorMessage?: String;
  constructor(private auth:AuthService,private route:Router ) { }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required ])
  });

  registre(){


    this.newUser = this.registerForm.value;
    console.log(this.newUser)
    this.auth.register(this.newUser).subscribe(
      (data) => {

        this.route.navigate(['/login']);
        console.log(data);
        if (data instanceof HttpErrorResponse) {
          if (data.status === 400) {
            this.errorMessage = data.error;
          } else {
            this.errorMessage = "An unexpected error occurred. Please try again later.";



          this.route.navigate(['/login']);


          }}},(error)=>{
            this.errorMessage = error.error;
          }
    );
  }
  ngOnInit(): void {
  }

}
