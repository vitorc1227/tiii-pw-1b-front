import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    TelaCadastroComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TemplateModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

