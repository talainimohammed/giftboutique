import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card';

export const addItem = createAction(
  '[Basket] Add Item',
  props<{ item: Card }>()
);

export const removeItem = createAction(
  '[Basket] Remove Item',
  props<{ itemId: string }>()
);

export const clearBasket = createAction('[Basket] Clear Basket');
