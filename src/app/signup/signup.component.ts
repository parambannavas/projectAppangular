import { Component, OnInit } from '@angular/core';
import { Signup } from './signup.model';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password.validator';
export interface gender {
  value: string;
  display: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  states; 
  hide;
  userData = new Signup(null, null, null, null, null, null, null);
  registerForm: FormGroup;
  submitted = false;
  Status: String;

  constructor(private myService: MyServiceService, private router: Router, private formBuilder: FormBuilder) { 
    this.loadStates(); }
    loadStates() {
      var allStates = 'Alappuzha   ,    Ernakulam, 	Idukki , \
                       Malappuram, Palakkad, Pathanamthitta,\
                       Thiruvananthapuram         ,\
                       	Kollam, 	Kottayam, 	Kozhikode ,\
                          Kannur, 	Kasaragod,\
                          Thrissur       ,  	 Wayanad \
';
      this.states =  allStates.split(/, +/g).map( function (state) {
         return {
            value: state,
            display: state
         };
      });
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName      : ['', Validators.required],
      lastName       : ['', Validators.required],
      email          : ['', [Validators.required, Validators.email]],
      password       : new FormControl('', [Validators.required,Validators.minLength(5)]),
      confirmPassword: new FormControl('', Validators.required),
      gender         : new FormControl('',Validators.required),
      residence      : new FormControl('', Validators.required),
    },{ validator    : ConfirmPasswordValidator.MatchPassword });
  }
  get f() { return this.registerForm.controls; }

  signup() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.userData.firstName=this.registerForm.get('firstName').value;
    this.userData.lastName=this.registerForm.get('lastName').value;
    this.userData.email=this.registerForm.get('email').value;
    this.userData.password=this.registerForm.get('password').value;
    this.userData.confirmPassword=this.registerForm.get('confirmPassword').value;
    this.userData.gender=this.registerForm.get('gender').value;
    this.userData.residence=this.registerForm.get('residence').value;

    this.myService.signup(this.userData)
      .subscribe((result) => {
        this.Status = JSON.parse(JSON.stringify(result)).Status;
        if (this.Status == "Success") {
          this.router.navigate(['signin']);
        }
        else {
          alert(this.Status);
        }
      });
  }

 
}