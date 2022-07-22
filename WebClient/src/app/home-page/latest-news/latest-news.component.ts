import { Component, OnInit } from '@angular/core';
import { NewsCategory } from '../models/news-category';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  selectedDevice = 'Health';
  categories: NewsCategory[] = [];
  viewMode!:number;
  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._newsService.getNewsCategories().subscribe({
      next: res=>{
        console.log(res.newsCategory)
        this.categories = res.newsCategory;
      }
    })
  }

  onCategorySelected(event: any) {
    console.log(event.target.value);
  }

  filterByCategory(categoryId: any){

  }

  selectColor(index: any) {
    this.viewMode = index;
}

}
