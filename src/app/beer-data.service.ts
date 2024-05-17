import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/Beer';

const URL = 'https://6647a26a2bb946cf2f9e6d3c.mockapi.io/api/v1/beers/';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(URL)
    .pipe(
      tap((beers: Beer[]) => beers.forEach(beer => beer.quantity = 0))
    );
  }
}
