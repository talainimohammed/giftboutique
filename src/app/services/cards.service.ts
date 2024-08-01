import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }

  getCards():Observable<Card[]>{
    return this.http.get<Card[]>('assets/data/cards.json');
  }

}
