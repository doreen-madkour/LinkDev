import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  selectedDevice = 'Health';
  categories = [
    { id: 1, name: "Top News" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Sport" },
    { id: 5, name: "Health" },
    { id: 5, name: "Economics" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelected(event: any) {
    console.log(event.target.value);
  }

  filterByCategory(categoryId: any){

  }
}
