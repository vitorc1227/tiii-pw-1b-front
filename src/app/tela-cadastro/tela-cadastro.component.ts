import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignUp } from './signup';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  signUp: SignUp;
  sucessoCadastro: boolean = false;
  falhaCadastro: boolean = false;

  constructor(
    private _router: Router,
    private _auth: AuthService,
  ) {
    this.signUp = new SignUp();
  }

  ngOnInit(): void { }

  onSubmit() {
    this._auth
      .registerUser(this.signUp)
      .subscribe( response => {
        this.sucessoCadastro = true;
        this._router.navigate(['']);
        this.signUp = new SignUp();
    }, error => {
      this.falhaCadastro = true;
    })
  }
}
