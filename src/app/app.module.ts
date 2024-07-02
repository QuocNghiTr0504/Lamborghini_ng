import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';



import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {CdkDrag} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ProductitemComponent } from './pages/products/productitem/productitem.component';
import { ProductlistComponent } from './pages/products/productlist/productlist.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';


import { RouterLink, RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal/modal.component';
import { DetailsComponent } from './pages/details/details.component';

import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './pages/chart/chart.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    CommentsComponent,
    SettingComponent,
    TranslateComponent,
    DashboardComponent,
    DetailsComponent,
    HeaderComponent,
    ModalComponent,
    ProductitemComponent,
    ProductlistComponent,
    HeaderComponent,
    MainLayoutComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    AppRoutingModule,
    RouterLink,
    MatSlideToggleModule,
    CdkDrag,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,   
    CommonModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled',
    }),
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
