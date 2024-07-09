import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {
    this.auth.authState.subscribe(user => {
      if (user) {
        const token = localStorage.getItem('token');
        this.userSubject.next({ ...user, token });
      } else {
        this.userSubject.next(null);
      }
    });
  }

  loginWithGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      if (res.user) {
        const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day expiration
        // localStorage.setItem('token', res.credential?.accessToken || '');
        localStorage.setItem('tokenExpiration', expirationTime.toString());

        const userInfo = {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          phoneNumber: res.user.phoneNumber,
          providerId: res.additionalUserInfo?.providerId,
          profile: res.additionalUserInfo?.profile,
        };
        
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.userSubject.next(userInfo); // Update the BehaviorSubject with user info

        this.router.navigate(['/profile']);
      }
    }).catch(error => {
      console.error('Error signing in with Google:', error);
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.userSubject.next(null);
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  }

  getToken(): string | null {
    const expiration = localStorage.getItem('tokenExpiration');
    if (!expiration || parseInt(expiration) < new Date().getTime()) {
      this.clearSession();
      return null;
    }
    return localStorage.getItem('token');
  }

  private clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('user');
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
