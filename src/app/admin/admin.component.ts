import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public app: AppComponent
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this.password = params['password'];

      if (this.username === 'admin' && this.password === '123123') {
      } else this.router.navigate(['home']);
    });
  }
}
