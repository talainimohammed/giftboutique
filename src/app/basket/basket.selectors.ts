import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BasketState } from './basket.state';

export const selectBasketState = createFeatureSelector<BasketState>('basket');

export const selectBasketItems = createSelector(
  selectBasketState,
  (state: BasketState) => state ? state.items : []
);
