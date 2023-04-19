import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';

const RESERVATIONS_KEY = 'reservations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  reservations: Reservation[] = [];
  username!: string;
  password!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public reservationService: ReservationService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this.password = params['password'];

      if (this.username === 'admin' && this.password === '123123') {
        this.reservationService.reservations$.subscribe((reservations) => {
          this.reservations = reservations;
        });
      } else {
        this.router.navigate(['home']);
      }
    });
  }
}
