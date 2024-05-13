import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  verifyBeerQuantity(beer: Beer){
    if(beer.quantity > beer.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(beer.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
    beer.quantity = 0;
  }

upQuantity(beer: Beer): void {
  if(beer.stock > beer.quantity) {
    beer.quantity ++;
  }
}

downQuantity(beer: Beer): void {
  if(beer.quantity > 0) {
    beer.quantity --;
  }
 }

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
