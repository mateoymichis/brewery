import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  beers: Beer[] = [
    {
      name: "Porteña loca",
      type: "Porter",
      price: 3550,
      stock: 49,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Lupulada",
      type: "IPA",
      price: 3900,
      stock: 7,
      image: "assets/img/porter.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Doradísima",
      type: "Golden",
      price: 2900,
      stock: 0,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
  ];
}
