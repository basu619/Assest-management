import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SignINComponent} from './sign-in/sign-in.component';
import{HomepageComponent} from './homepage/homepage.component';
import{ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import{ResetPasswordComponent} from './reset-password/reset-password.component';
import{PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: SignINComponent,
    data: { title: 'Admin Login : ' }
  },
  {
    path: 'login',
    component: SignINComponent,
    data: { title: 'Admin Login : ' }
  },
  {
    path: 'home-page',
    component: HomepageComponent,
    /*canActivate : [AuthGuard],*/
    data: { title: 'Asset Management page : ' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'forgot-password page : ' }
  },
  {
    path: 'reset-password/:adminUniq',
    component: ResetPasswordComponent,
    data: { title: 'reset-password page : ' }
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    data: { title: 'PageNotfoundComponent : ' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
