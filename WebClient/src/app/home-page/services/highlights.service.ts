import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HighlightResponse } from '../models/highlight-response';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {
  baseUrl: string = environment.apiRoot;
  
  constructor(private _httpClient: HttpClient) { }

  getHighlights(): Observable<HighlightResponse> {
    return this._httpClient.get<HighlightResponse>(`${this.baseUrl}/fee177346e7875554413`)
  }
}
