import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auths/auth.service'; 

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log("routeQNT",route);
  console.log("state  QNT",state);
  return authService.isLoggedIn().then(isLoggedIn => {
    if (isLoggedIn) {
      return true;
    } else {
  
      return false;
    }
  });
};
