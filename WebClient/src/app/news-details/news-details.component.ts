import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../home-page/models/news-item';
import { NewsService } from '../home-page/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsdetails = new NewsItem();

  constructor(private _route: ActivatedRoute , private _newsService: NewsService) { }

  ngOnInit(): void {
    this._route.params.forEach(params => {
      let id = +params['id'];
      this.getNewsById(id);
    })
  }

  getNewsById(id: number){
    this._newsService.getNewsById(id).subscribe({
      next: res=>{
        this.newsdetails = res;
      }
    })
  }

}
