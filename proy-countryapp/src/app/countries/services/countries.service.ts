// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { catchError, Observable, of } from 'rxjs';
import type { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  searchByNames(name: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}
