import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) { }

  nghi:any[] = [];
  loginWithGoogle(){
   return this.auth.signInWithPopup(new GoogleAuthProvider)
  // .then(res =>{
  //    if(res.additionalUserInfo?.profile){
  //       this.nghi = [res.additionalUserInfo.profile]
  //    }
  //    console.log("oke", this.nghi)
  //   })
  }
}

