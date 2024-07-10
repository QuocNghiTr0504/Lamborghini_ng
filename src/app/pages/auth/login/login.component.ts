import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/app/service/auths/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  oderSignin: FormGroup;
  user:any;
  private userSubscription: Subscription| undefined;



  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.oderSignin = this.fb.group({
      email: '',
      password: ''
    }); 

  }
  ngOnDestroy(): void {
    this.userSubscription = this.auth.user$.subscribe(user => {
      this.user = user; // Update user information when user$ emits a new value
    });
  }
  ngOnInit(): void {
    this.userSubscription = this.auth.user$.subscribe(user => {
      this.user = user; // Update user information when user$ emits a new value
    });
   
  }

  LgGG() {
    this.auth.loginWithGoogle().then(result => {
      console.log("111111", this.user)
  
    }).catch(error => {
      console.error(error);
    });
  }
  logoutGG(){
    this.auth.logout();
  }

  onSubmit() {
    console.log(this.oderSignin);
  }

  signinLogin() {
    console.log(this.oderSignin.value);
  }
}
