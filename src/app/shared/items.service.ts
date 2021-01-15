import { Injectable } from '@angular/core';
import { Item } from './item.model';


import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({providedIn: 'root'})
export class ItemsService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<Item[]>(BASE_URL);
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER);
  }

  update(item: Item) {
    return this.http.patch(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER);
  }

  delete(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`);
  }

  search(term: string) {
    const search = new HttpParams();
    search.set('q', term);

    return this.http.get(`${BASE_URL}`, {params: search});
  }
}