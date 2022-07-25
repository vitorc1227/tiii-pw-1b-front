import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
