import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent implements OnInit {
  serviceType: string;
  serviceTypeText: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {
    this.serviceType = '';
    this.serviceTypeText = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.serviceType = params['service'];
      switch (this.serviceType) {
        case 'treatment':
          this.serviceTypeText = 'Facial Treatments';
          break;
        case 'therapy':
          this.serviceTypeText = 'Massage Therapy';
          break;
        case 'haircut':
          this.serviceTypeText = 'Haircut and Style';
          break;
        case 'color':
          this.serviceTypeText = 'Hair Coloring';
          break;
        case 'pedicure':
          this.serviceTypeText = 'Manicure and Pedicure';
          break;
        case 'wax':
          this.serviceTypeText = 'Waxing';
          break;
        default:
          this.router.navigate(['services']);
          break;
      }

      document.querySelector('button')?.addEventListener('click', () => {
        const reserveType = this.serviceTypeText;
        const reserveNametext = (
          document.querySelector('#params-name') as HTMLInputElement
        ).value;
        const reserveAddresstext = (
          document.querySelector('#params-address') as HTMLInputElement
        ).value;
        const reserveDatetext = (
          document.querySelector('#params-date') as HTMLInputElement
        ).value;
        const reserveEmailtext = (
          document.querySelector('#params-email') as HTMLInputElement
        ).value;

        console.log(
          `${reserveNametext}: ${reserveAddresstext}: ${reserveDatetext}: ${reserveEmailtext}`
        );

        this.reservationService.enterReservation({
          type: reserveType,
          name: reserveNametext,
          address: reserveAddresstext,
          date: reserveDatetext,
          email: reserveEmailtext,
        });

        alert('Reservation processed! Thank you for your patronage. :>');

        this.router.navigate(['home']);
      });
    });
  }
}
