// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Gif, SearchGIFResponse } from '../interfaces/search-gif';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private _apiKey = 'g8AEXEuovgsHRK1jUkqNEJmgkLMcLDgA';
  private _url = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    if (this._tagHistory.length === 0) {
      this.loadLocalStorage();
    }

    if (this._tagHistory.length > 0) {
      this.searchTag(this._tagHistory[0]);
    }
  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagHistory', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    const tagHistory = localStorage.getItem('tagHistory');
    if (tagHistory) {
      this._tagHistory = JSON.parse(tagHistory);
    }
  }
  private filterDuplicates(tag: string): void {
    this._tagHistory = this._tagHistory.filter(
      (t) => t.toLowerCase() !== tag.toLowerCase()
    );

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  searchTag(tag: string) {
    if (tag.trim().length === 0) {
      return;
    }

    this.filterDuplicates(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', '10');

    return this.http
      .get<SearchGIFResponse>(`${this._url}/search`, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }
}
