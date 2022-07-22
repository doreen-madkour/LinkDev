import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsCategoriesResponse } from '../models/news-category-response';
import { NewsItem } from '../models/news-item';
import { NewsListingResponse } from '../models/news-listing-reponse';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = environment.apiRoot;
  
  constructor(private _httpClient: HttpClient) { }


  getNewsCategories(): Observable<NewsCategoriesResponse> {
    return this._httpClient.get<NewsCategoriesResponse>(`${this.baseUrl}/91298d970c27e9a06518`)
  }

  getAllNews(): Observable<NewsListingResponse> {
    return this._httpClient.get<NewsListingResponse>(`${this.baseUrl}/d275425a434e02acf2f7`)
  }

  getNewsById(newsId:number): Observable<NewsItem> {
    return this._httpClient.get<NewsItem>(`${this.baseUrl}/d275425a434e02acf2f7/News/${newsId}`)
  }
}
