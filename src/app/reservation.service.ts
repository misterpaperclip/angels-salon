import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  reservations$ = this.reservationsSubject.asObservable();

  constructor() {
    // retrieve reservations from sessionStorage and set them in the subject
    const storedReservations = sessionStorage.getItem('reservations');
    if (storedReservations) {
      this.reservationsSubject.next(JSON.parse(storedReservations));
    }
  }

  setReservations(reservations: Reservation[]) {
    // store reservations in sessionStorage
    sessionStorage.setItem('reservations', JSON.stringify(reservations));
    this.reservationsSubject.next(reservations);
  }

  enterReservation(reservation: Reservation) {
    const currentReservations = this.reservationsSubject.getValue();
    const newReservations = [...currentReservations, reservation];
    this.setReservations(newReservations);
  }
}
