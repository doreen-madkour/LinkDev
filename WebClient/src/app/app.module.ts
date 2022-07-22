import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NewsComponent,
    ContactUsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
