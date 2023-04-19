import { Component } from '@angular/core';
interface Reservation {
  type: string;
  name: string;
  address: string;
  date: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angels-salon';
  reservationRecords: Reservation[] = [];
}
