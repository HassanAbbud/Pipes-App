import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
})
export class PrimeNgModule { }
