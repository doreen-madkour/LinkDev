import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule,
    SlickCarouselModule 
  ],
  exports:[
    SlickCarouselModule,
    SafePipe
  ]
})
export class SharedModule { }
