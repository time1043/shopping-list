import { useLocalStorage } from 'react-use';

import type { Product } from '@/types/Product';

import { SHOPS_KEY } from '@/constants/shop';
import { ProductService } from '@/services/ProductService';

export function useShopList() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((data) => setProducts(data));
  // }, []);

  const [products, setProducts] = useLocalStorage<Product[]>(
    SHOPS_KEY,
    ProductService.getProductsData(),
  );

  return { products, setProducts };
}
