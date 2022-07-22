import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CoreModule } from '../core/core.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class HomePageModule { }
