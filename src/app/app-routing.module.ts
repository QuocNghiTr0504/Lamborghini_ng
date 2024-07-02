import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProductlistComponent } from './pages/products/productlist/productlist.component';
import { userImplementsGuard } from './user--implements.guard';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'articles',
        loadChildren: () => import('./pages/articles/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'products',
        component: ProductlistComponent,
        canActivate: [userImplementsGuard],
      },
      {
        path: 'translate',
        component: TranslateComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
