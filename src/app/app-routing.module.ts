import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
      {
        path:'',
        component: LoginComponent,
      },
      {
        path: '',
        loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule),
        canActivate: [authGuard],
      },
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
