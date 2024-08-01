import { Component, Output,EventEmitter } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { Card } from '../../models/card';
import { CardsService } from '../../services/cards.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBasketItems } from '../../basket/basket.selectors';
import { addItem, clearBasket, removeItem } from '../../basket/basket.actions';
import { BasketitemscountService } from '../../services/basketitemscount.service';
import { basketReducer } from '../../basket/basket.reducer';
@Component({
  selector: 'app-products',
  //standalone: true,
  //imports: [CardComponent,HttpClientModule,CommonModule,FormsModule,SearchPipe],
  //providers: [CardsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  cardData: Card[] = [];
  searchCard: string = '';
  nbitems: number = 0;
  items$:Observable<Card[]>;
  constructor(private cardService: CardsService, private store:Store, private basketitemscountService:BasketitemscountService) {
    this.items$ = this.store.select(selectBasketItems);
    this.items$.subscribe(items => this.nbitems = items.length);
  }

  ngOnInit() {
    this.cardService.getCards().subscribe(
      (data: Card[]) => {
      if (Array.isArray(data)) {
        this.cardData = data;
      } else {
        console.error('Data is not an array:', data);
      }
    }, error => {
      console.error('Error fetching cards:', error);
    });
  }

  notifyAdded() {
    this.basketitemscountService.sendBasketCount(this.nbitems);
  }
  addItem(item: Card) {
    this.store.dispatch(addItem({ item }));
    this.notifyAdded();
  }


  removeItem(itemId: string) {
    this.store.dispatch(removeItem({ itemId }));
  }

  clearBasket() {
    this.store.dispatch(clearBasket());
  }
}
