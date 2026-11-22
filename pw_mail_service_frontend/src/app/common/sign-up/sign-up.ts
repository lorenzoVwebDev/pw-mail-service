import { Component, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SubmitdisabledDirective } from '../../directives/submitdisabled.directive';

@Component({
  imports: [ReactiveFormsModule, SubmitdisabledDirective],
  selector: 'app-sign-up',
  styleUrl: './sign-up.scss',
  templateUrl: './sign-up.html',
})
export class SignUp {
  readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  readonly passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;
  signUpOk: WritableSignal<boolean> = signal<boolean>(false)
  alreadyRegister: WritableSignal<boolean> = signal<boolean>(false)
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl("lorenzo", [Validators.required]),
    email: new FormControl("lorenzo.viganego@libero.it", [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl("Password$1", [Validators.required, Validators.pattern(this.passwordPattern)]),
    password_confirmation: new FormControl("Password$1", [Validators.required, Validators.pattern(this.passwordPattern)])
  })

  constructor(public router: Router, public auth: AuthService) {}

  signUp() {
    const name = this.signUpForm.value.name
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    const password_confirmation = this.signUpForm.value.password_confirmation

    if (name && email && password && password_confirmation) {
      this.auth.signUp({name, email, password, password_confirmation}).subscribe((res) => {
        console.log("good")
        switch (res.status) {
          case (200): {
            this.signUpOk.set(true)
            setTimeout(() => {
              this.router.navigate(['/'])
            }, 2000)
            break
          }
          case (201): {
            this.signUpOk.set(true)
            break;
          }
        }


      }, (res: HttpErrorResponse) => {
          switch (res.status) {
            case 422: {
              this.alreadyRegister.set(true)
              setTimeout(() => {
                window.location.reload()
              }, 5000)
              break;
            }
          }
      })
    }
  }
}
