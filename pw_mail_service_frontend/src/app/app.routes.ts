import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignIn } from './common/sign-in/sign-in';
import { SignUp } from './common/sign-up/sign-up';
import { MailRegistrationSuccess } from './common/mail-registration-success/mail-registration-success';

export const routes: Routes = [{
  path: "",
  component: Home
}, {
  path: "login",
  component: SignIn
}, {
  path: "signup",
  component: SignUp
}, {
  path: "mailconfirmation",
  component: MailRegistrationSuccess
}];
