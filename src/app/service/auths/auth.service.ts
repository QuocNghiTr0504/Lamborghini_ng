import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null); 
  abc$ = this.userSubject.asObservable(); 

  constructor(private auth: AngularFireAuth, private router: Router) { }

  loginWithGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      if (res.user) {
        const userInfo = {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          phoneNumber: res.user.phoneNumber,
          providerId: res.additionalUserInfo?.providerId,
          profile: res.additionalUserInfo?.profile,
          role: 'user'
        };
        this.userSubject.next(userInfo); 
        this.router.navigate(['/home']);
      }
    }).catch(error => {
      console.error('Error signing in with Google:', error);
    });
  
  }

  logout() {
    this.auth.signOut().then(() => {
      this.userSubject.next(null); 
      this.router.navigate(['/']);
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  }

  }


