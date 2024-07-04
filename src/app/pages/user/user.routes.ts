import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { userImplementsGuard } from "src/app/user--implements.guard";
import { CommentsComponent } from "./comments/comments.component";
import { DetailsComponent } from "./products/details/details.component";
import { ProductlistComponent } from "./products/productlist/productlist.component";
import { TranslateComponent } from "./translate/translate.component";
import { HeaderComponent } from "src/app/components/header/header.component";

export const userRoutes:Routes = [
        {
            path:'',
            component:HeaderComponent,
            children:[
                {
                    path: '',
                    component: HomeComponent
                  },
                  {
                    path: 'home',
                    component: HomeComponent
                  },
                  {
                    path: 'articles',
                    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
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
      
]