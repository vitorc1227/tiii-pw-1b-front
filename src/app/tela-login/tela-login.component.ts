import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignIn } from './signin';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  signIn: SignIn;
  mensagemErroLogin: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _auth: AuthService
  ) {
    this.signIn = new SignIn();
   }

  onSubmit() {
    this.loginUser();
  }

  loginUser() {
    this._auth.loginUser(this.signIn)
      .subscribe(res => {
          this.router.navigate(['/layout']);
          localStorage.setItem('username', this.signIn.usernameOrEmail);
        }, error => {
      this.mensagemErroLogin = "Falha no login!"
    });
  }

  ngOnInit(): void {
  }

  novaConta(event) {
    event.preventDefault();
    this.router.navigate(['/cadastro']);
  }
}
