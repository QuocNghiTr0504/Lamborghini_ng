import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProductlistComponent } from './pages/products/productlist/productlist.component';
import { userImplementsGuard } from './user--implements.guard';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { BloglistComponent } from './pages/blogs/bloglist/bloglist.component';
import { BlogdetailComponent } from './pages/blogs/blogdetail/blogdetail.component';

const routes:Routes=[
      {
        path:'singin',
        component: SignInComponent,
      },
      {
        path: '',
        component:HeaderComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path:'dashboard',
            component: DashboardComponent
          },
          {
            path:'home',
            component: HomeComponent
          }
          ,
          {
            path:'comments',
            component: CommentsComponent
          },
          {
            path:'products',
            component: ProductlistComponent,
            canActivate:[userImplementsGuard],
          }
          ,
          {
            path:'translate',
            component: TranslateComponent
          }
          ,
          {
            path:'details/:id',
            component: DetailsComponent
          },
          {
            path: 'blogs',
            component: BloglistComponent
          },
          {
            path:'blogdetails/:id',
            component: BlogdetailComponent
          }
          
          
        ]
      }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
