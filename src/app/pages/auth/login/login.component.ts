import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auths/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  oderSignin: FormGroup;
  nghitung: any;
  constructor(private fb: FormBuilder,private auth: AuthService){
    this.oderSignin = this.fb.group({
      email:'',
      password:''
    })
  } 
 
  LgGG(){
    this.auth.loginWithGoogle().then(result => {
     this.auth.nghi.map(oke =>{
        // this.nghitung = oke
     })
    }).catch(error => {
      console.error(error);
    });
  }
  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.oderSignin)
  }
  signinLogin(){
    console.log(this.oderSignin.value)
  }
}
