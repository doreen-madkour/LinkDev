import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsCategoriesResponse } from '../models/news-category-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = environment.apiRoot;
  
  constructor(private _httpClient: HttpClient) { }

  // saveLettersManagement(body: LettersManagement): Observable<boolean> {
  //   return this._httpClient.post(`${this.baseUrl}/SaveLettersManagement`, body, { headers: new HttpHeaders({ 'content-type': 'application/json' }) }).pipe(
  //     map((res) => <boolean>res)
  //   );
  // }

  getNewsCategories(): Observable<NewsCategoriesResponse> {
    return this._httpClient.get<NewsCategoriesResponse>(`${this.baseUrl}/91298d970c27e9a06518`)
  }
}
