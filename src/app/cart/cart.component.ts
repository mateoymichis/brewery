import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList: Beer[] = [];
  constructor(private cart: BeerCartService) {
    cart.cartList.subscribe(
      (observable) => this.cartList = observable
    );
  }
}