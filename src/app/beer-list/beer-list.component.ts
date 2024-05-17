import { Component } from '@angular/core';
import { Beer } from './Beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  constructor(
    private cart: BeerCartService,
    private beersService: BeerDataService
  ) {
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(beer: Beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  beers: Beer[] = [];

  ngOnInit(): void {
    this.beersService.getAll().subscribe(data => this.beers = data);
  }
}
