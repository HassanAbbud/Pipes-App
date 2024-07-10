import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public hero: Hero[] = [
    {
      name: "superman",
      canFly: true,
      color: Color.blue,
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black,
    },
    {
      name: "Flash",
      canFly: false,
      color: Color.red,
    },
    {
      name: "Green Lantern",
      canFly: true,
      color: Color.green,
    },
  ];

  public sortValue?: keyof Hero|null|undefined = null;

  changeOrder(value:  keyof Hero|null|undefined){
    this.sortValue = value;
  }

  toggleCase() {
    return this.isUpperCase = !this.isUpperCase
  }
}
