import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',

})
export class NumbersPageComponent {
  public myNumber: number = 9000;
  public myCurrency: number = 4500;
  public myPercent:number = .50;
}
