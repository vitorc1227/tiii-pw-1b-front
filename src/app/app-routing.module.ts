import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';


const routes: Routes = [
  { path: 'cadastro', component: TelaCadastroComponent },
  { path: '', component: TelaLoginComponent },
  { path: 'layout', component: LayoutComponent, children: [
    { path: 'home', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
