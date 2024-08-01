import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketitemscountService {
  private basketCount= new Subject<number>();
  basketCount$ = this.basketCount.asObservable();
  constructor() { }

  sendBasketCount(count: number) {
    this.basketCount.next(count);
  }

}
