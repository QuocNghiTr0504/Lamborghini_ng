
import { CanActivateFn } from '@angular/router';


export const userImplementsGuard: CanActivateFn = (route, state) => {
  console.log('route',route);
  console.log('state',state);
  return  true;

};
