import { atom } from 'jotai';

import type { Product } from '@/types/Product';

import { CARTS_KEY } from '@/constants/cart';

function getCartItemsCount() {
  try {
    const data = localStorage.getItem(CARTS_KEY);
    if (!data) return 0;
    const list: Product[] = JSON.parse(data);
    return list.length;
  } catch {
    return 0;
  }
}

export const CartItemsCountAtom = atom(getCartItemsCount());
