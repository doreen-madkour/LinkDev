import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CoreModule } from '../core/core.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from '../shared/shared.module';
import { HighlightsBannerComponent } from './highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from './things-we-do/things-we-do.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LatestNewsComponent,
    HighlightsBannerComponent,
    ThingsWeDoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class HomePageModule { }
