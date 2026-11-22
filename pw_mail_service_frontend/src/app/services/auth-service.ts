import {Injectable, signal, WritableSignal} from "@angular/core"
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import { switchMap } from "rxjs"
import { Signup_payload } from "../../types/types"

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(public http: HttpClient) {}

  signIn(email:string, pwd: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })

    const params = new HttpParams({
      fromObject: {
      "email":email,
      "password": pwd
    }
    })

    const body = {
      email,
      password: pwd
    }

    return this.http.get("http://localhost:8000/csrf-cookie").pipe(switchMap(() => this.http.post("http://localhost:8000/login", body, {
      observe: "response",
      headers,
      withCredentials: true
    })))
  }

  signUp(signup_payload: Signup_payload) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.get("http://localhost:8000/csrf-cookie").pipe(switchMap(() => this.http.post("http://localhost:8000/register", signup_payload,
      {
        observe: "response",
        headers,
        withCredentials: true
      }
    )))
  }

  forgotPassword(email: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    const body = {
      email
    }

    return this.http.get("http://localhost:8000/csrf-cookie").pipe(switchMap(() => this.http.post("http://localhost:8000/forgot-password", body, {
      observe: "response",
      headers,
      withCredentials: true
    })))
  }
}
