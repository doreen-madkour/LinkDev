import { Component, ElementRef, OnInit } from '@angular/core';
import { NewsCategory } from '../models/news-category';
import { NewsItem } from '../models/news-item';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  categories: NewsCategory[] = [];
  news: NewsItem[] = [];
  newsCopy: NewsItem[] = [];
  selectedCategory!: number;
  isFilteredCleared: boolean = true;
  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAllNews();
  }

  getCategories() {
    this._newsService.getNewsCategories().subscribe({
      next: res => {
        this.categories = res.newsCategory;
      }
    })
  }

  getAllNews() {
    this._newsService.getAllNews().subscribe({
      next: res => {
        this.news = res.News;
        this.news = this.news.filter(item => item.showOnHomepage === 'yes');
        this.newsCopy = [...this.news];
      }
    })
  }


  onCategorySelected(event: any) {
    if(event.target.value != 'undefined')
      this.filterByCategory(event.target.value);
    else
      this.clearFilter();
  }

  filterByCategory(categoryId: any) {
    this.news = this.newsCopy.filter(item=> item.categoryID == categoryId);
  }

  clearFilter(){
    this.isFilteredCleared = true;
    this.news = this.newsCopy;
  }

  categorySelected(index: number) {
    this.isFilteredCleared = false;
    this.selectedCategory = index;
  }

  getCategoryName(categoryId:number):string | undefined{
    return this.categories.find(category => category.id == categoryId)?.name;
  }

  addToFavourites(item: NewsItem) {
    this.closeSocialActions();
    item.isAddedToFavourite = !item.isAddedToFavourite;
  }

  showSocialActions(socialActions:HTMLElement){
    let isVisible = socialActions.classList.contains('visibility');
    this.closeSocialActions();
    if(isVisible)
      socialActions.classList.remove('visibility');
    else
      socialActions.classList.add('visibility');
  }

  closeSocialActions(){
    let visibilityElement = document.querySelectorAll('.visibility');
    visibilityElement.forEach(element=> element.classList.remove('visibility'));
  }

}