import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Basics',
            routerLink: '/basics',
          },
          {
            label: 'Numbers',
            routerLink: '/numbers',
          },
          {
            label: 'Uncommon',
            routerLink: '/uncommon',
          },
        ],
      },
    ];
  }
}
