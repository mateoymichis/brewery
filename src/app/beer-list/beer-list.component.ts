import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  beer = {
    "name": "Porteña loca",
    "type": "Porter",
    "price": 3550,
    "stock": 49,
    "image": "assets/img/porter.jpg"
  }
}
