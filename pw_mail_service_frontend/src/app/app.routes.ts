import { changePasswordResolver } from './resolver/ChangePasswordResolver';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignIn } from './common/sign-in/sign-in';
import { SignUp } from './common/sign-up/sign-up';
import { MailRegistrationSuccess } from './common/mail-registration-success/mail-registration-success';
import { ForgotPassword } from './common/forgot-password/forgot-password';
import { ServerError } from './common/server-error/server-error';
import { ChangePassword } from './common/change-password/change-password';


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
}, {
  path: "forgot-password",
  component: ForgotPassword
}, {
  path: "500",
  component: ServerError
}, {
  path: "change-password",
  component: ChangePassword,
  resolve: {
    changePwdObject: changePasswordResolver
  }
}];
