import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickCarouselModule 
  ],
  exports:[
    SlickCarouselModule
  ]
})
export class SharedModule { }
