import { Action, createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearBasket } from './basket.actions';
import { BasketState, initialState } from './basket.state';

const _basketReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),
  on(removeItem, (state, { itemId }) => ({
    ...state,
    items: state.items.filter(item => item.id.toString() !== itemId)
  })),
  on(clearBasket, state => ({
    ...state,
    items: []
  }))
);

export function basketReducer(state: BasketState | undefined, action: Action) {
  return _basketReducer(state, action);
}
