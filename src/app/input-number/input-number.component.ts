import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
  
  @Input()
  quantity: number=0;
  
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  verifyBeerQuantity() {
    if (this.quantity > this.max) {
      alert("No hay suficientes cervezas en stock");
      this.quantity = 0;
    }
    if (this.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);
  }

  upQuantity(): void {
    if (this.max > this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
