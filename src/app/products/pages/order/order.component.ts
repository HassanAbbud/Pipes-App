import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  toggleCase() {
    return this.isUpperCase = !this.isUpperCase
  }
}
