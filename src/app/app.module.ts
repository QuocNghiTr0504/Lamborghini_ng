import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';

import { RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal/modal.component';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component'; 
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,   
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
