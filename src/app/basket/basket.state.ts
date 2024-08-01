import { Card } from '../models/card';

export interface BasketState {
  items: Card[];
}

export const initialState: BasketState = {
  items: []
};
