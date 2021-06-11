import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    SignINComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomepageComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
