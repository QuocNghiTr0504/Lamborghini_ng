
import { CanActivateFn } from '@angular/router';
import { delay } from 'rxjs';


export const userImplementsGuard: CanActivateFn = (route, state) => {
  console.log('route',route);
  console.log('state',state);
  return  true;

};
