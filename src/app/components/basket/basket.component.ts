import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';
import { Store } from '@ngrx/store';
import { selectBasketItems } from '../../basket/basket.selectors';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  items$:Observable<Card[]>;
  listcard?:Card[];
  constructor(private store:Store , private cardService:CardsService) {
    this.items$ = this.store.select(selectBasketItems);
  }
  ngOnInit(): void {
    this.cardService.getCards().subscribe(
      cards => {
        this.listcard = cards;
      }
    );
  }
}
