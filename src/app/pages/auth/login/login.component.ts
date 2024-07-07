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
  user$: Observable<any>; // Observable để lưu thông tin người dùng

  constructor(private fb: FormBuilder, private auth1: AuthService) {
    this.oderSignin = this.fb.group({
      email: '',
      password: ''
    });
    this.user$ = this.auth1.abc$; // Lấy Observable từ AuthService
  }

  ngOnInit(): void {}

  LgGG() {
    this.auth1.loginWithGoogle().then(result => {
      console.log("result",result);
    }).catch(error => {
      console.error(error);
    });
  }

  onSubmit() {
    console.log(this.oderSignin);
  }

  signinLogin() {
    console.log(this.oderSignin.value);
  }
}
