import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { FooterComponent } from './full-layout/footer/footer.component';
import { HeaderComponent } from './full-layout/header/header.component';



@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class CoreModule { }
