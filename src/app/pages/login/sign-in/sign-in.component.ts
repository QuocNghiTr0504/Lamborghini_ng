import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  oderSignin: FormGroup;
  // oderSignin = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  constructor(private fb: FormBuilder){
    this.oderSignin = this.fb.group({
      email:'',
      password:''
    })
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
