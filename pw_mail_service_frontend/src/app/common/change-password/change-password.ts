import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-change-password',
  styleUrl: './change-password.scss',
  templateUrl: './change-password.html',
})
export class ChangePassword {
  route = inject(ActivatedRoute)
  readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  readonly passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,}$/;
  passwordChanged: WritableSignal<boolean> = signal<boolean>(false)
  changedError: WritableSignal<boolean> = signal<boolean>(false)
  data = toSignal(this.route.data, {requireSync: true})
  token_mail_object = computed(() => this.data()["changePwdObject"])
  changePasswordForm: FormGroup = new FormGroup({
    email: new FormControl(this.token_mail_object().email, [Validators.pattern(this.emailPattern), Validators.required]),
    password: new FormControl("", [Validators.pattern(this.passwordPattern), Validators.required]),
    confirmPassword: new FormControl("", [Validators.pattern(this.passwordPattern), Validators.required]),
  })

  constructor(public router: Router, public auth: AuthService) {

  }

  changePwd() {
    const token = this.token_mail_object().token
    const email = this.changePasswordForm.value.email
    const password = this.changePasswordForm.value.password
    const password_confirmation = this.changePasswordForm.value.confirmPassword

    if (email && password && password_confirmation) {
      this.auth.changePassword({token, email, password, password_confirmation}).subscribe((res) => {

        switch (res.status) {
          case 200: {
            this.passwordChanged.set(true)
            break;
          }
        }
      }, (res: HttpErrorResponse) => {
        switch (res.status) {
          case 422: {
            this.changedError.set(true)
            break;
          }
        }
      });
    }
  }
}
