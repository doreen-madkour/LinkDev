import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CoreModule } from '../core/core.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class HomePageModule { }
