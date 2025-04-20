import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-logged',
  standalone: false,
  templateUrl: './navbar-logged.component.html',
  styleUrl: './navbar-logged.component.less'
})
export class NavbarLoggedComponent {

  logout() {
    // TODO: Clear auth, redirect to login
    console.log('Logging out...');
  }
}
