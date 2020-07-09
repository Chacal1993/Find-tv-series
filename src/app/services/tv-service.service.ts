import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TvResponse } from '../types/tv-response.type';

@Injectable({
  providedIn: 'root'
})
export class TvServiceService {
  API_KEY = 'cea68b520beecac6718820e4ac576c3a';
  constructor(private httpClient: HttpClient) { }

  getTv(page: string = '1'): Observable<TvResponse> {
    const params = {
      api_key: this.API_KEY,
      page,
    };
    return this.httpClient.get<TvResponse>('https://api.themoviedb.org/3/tv/popular', { params });
  }
}
