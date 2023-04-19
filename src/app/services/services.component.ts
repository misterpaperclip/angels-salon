import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {
    const servicesElems = document.querySelectorAll('.service-box');
    for (let index = 0; index < servicesElems.length; index++) {
      const element = servicesElems[index];
      console.log(element.classList[1].split('-')[1].trim());
      element.addEventListener('click', () => {
        const queryParams = {
          service: element.classList[1].split('-')[1].trim(),
        };
        this.route.navigate(['reserve'], { queryParams });
      });
    }
  }
}
