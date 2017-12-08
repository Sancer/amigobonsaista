import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { Routes } from './auth.router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Routes)
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
