import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import { Signin } from './signin.model';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const key = "Status";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  
  user = new Signin(null, null);
  status: String;
  constructor(public local: LocalStorageService, private myService: MyServiceService, private router: Router
 , private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  
  }

  get f() { return this.registerForm.controls; }

  signin() {
    //alert("done");
    this.submitted = true;
    
    
      if (this.registerForm.invalid) {
      return;
    }
    

    this.user.email = this.registerForm.get("email").value;
    this.user.password = this.registerForm.get("password").value;
    console.log(this.user);
    this.myService.signin(this.user)
      .subscribe((result) => {
        this.status = JSON.parse(JSON.stringify(result)).Status;
        console.log(this.status);
        if (this.status == "Success") {
          this.local.set(key, this.status);
          console.log(this.local);
          this.router.navigate(['colleges']);
        }
        else {
          alert(this.status);
        }

      });

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}