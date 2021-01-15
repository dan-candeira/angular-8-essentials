import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Widget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Widget[]>(BASE_URL);
  }

}
