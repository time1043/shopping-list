import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

import type { Product } from '@/types/Product';

import { SHOPS_KEY } from '@/constants/shop';
import { ProductService } from '@/services/ProductService';
import { searchTextAtom } from '@/states/searchAtom';

export function useShopList() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((data) => setProducts(data));
  // }, []);

  const searchText = useAtomValue(searchTextAtom);

  const [products] = useLocalStorage<Product[]>(SHOPS_KEY, ProductService.getProductsData());
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (searchText) {
      setFilteredProducts(
        products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase())),
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchText]);

  return { products: filteredProducts };
}
