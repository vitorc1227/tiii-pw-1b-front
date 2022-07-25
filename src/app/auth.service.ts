import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_PATH, API_SIGNIN, API_SIGNUP} from 'src/environments/environment';
import { SignUp } from './tela-cadastro/signup';
import { SignIn } from './tela-login/signin'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(signUp: SignUp): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.http.post<any>(`${API_PATH}${API_SIGNUP}`, signUp, { headers, responseType: "json"});
  }

  loginUser(signIn: SignIn): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(`${API_PATH}${API_SIGNIN}`, signIn, {headers : headers, responseType: "json"});
  }
}
