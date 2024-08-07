import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userSubject.next(user);
      } else {
        this.userSubject.next(this.getPlaceholderUser());
      }
    });
  }

  loginWithGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      if (res.user) {
        this.saveUserData(res.user);
        this.router.navigate(['/home'])
      }
    }).catch(error => {
      console.error('Error signing in with Google:', error);
    });
  }

  private saveUserData(user: any) {
    const userRef = this.firestore.collection('Profile').doc(user.uid);
    const userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: 'user'
    };

    userRef.set(userData, { merge: true })
      .then(() => {
        this.userSubject.next(user); 
      })
      .catch(error => console.error('Error saving user data:', error));
  }

  logout() {
    this.auth.signOut().then(() => {
      this.userSubject.next(this.getPlaceholderUser());
      this.clearSession();
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  }

  private getPlaceholderUser() {
    return {
      displayName: 'Khách',
      photoURL: 'path/to/placeholder/image.png'
    };
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
  
  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}
