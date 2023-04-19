import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  login(): void {
    const queryParams = {
      username: (document.querySelector('#login-username') as HTMLInputElement)
        .value,
      password: (document.querySelector('#login-password') as HTMLInputElement)
        .value,
    };
    this.router.navigate(['admin'], { queryParams });
  }
}
