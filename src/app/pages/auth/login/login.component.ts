import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auths/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  oderSignin: FormGroup;
  user:any; 

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.oderSignin = this.fb.group({
      email: '',
      password: ''
    });
    this.user = this.auth.getUserInfo();   


  }
  ngOnInit(): void {
  }

  LgGG() {
    this.auth.loginWithGoogle().then(result => {
      console.log("result",result);
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
