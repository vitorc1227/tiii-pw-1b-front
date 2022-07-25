import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.username = '';
    localStorage.removeItem('username');
    this._router.navigate(['']);
  }

}
