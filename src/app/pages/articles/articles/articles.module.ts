import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { articleRoutes } from './articles.routes';
import { BloglistComponent } from '../../blogs/bloglist/bloglist.component';
import { register } from 'swiper/element/bundle';
import { BlogdetailComponent } from '../../blogs/blogdetail/blogdetail.component';
register();

@NgModule({
  declarations: [BloglistComponent,BlogdetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticlesModule { }
