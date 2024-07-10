import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public upperName: string = "some name"
  public lowerName: string = "SOME NAME"
  public titleName: string = "SoMe nAMe"

  public customDate: Date = new Date();
}
