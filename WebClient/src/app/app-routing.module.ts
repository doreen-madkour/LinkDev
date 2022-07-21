import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FullLayoutComponent } from './core/full-layout/full-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'', component: FullLayoutComponent , children:[
    { path: 'home', component: HomePageComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'contact-us', component: ContactUsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
