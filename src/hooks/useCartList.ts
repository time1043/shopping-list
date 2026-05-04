import { useSetAtom } from 'jotai';
import { useLocalStorage } from 'react-use';
import { toast } from 'sonner';

import type { Product } from '@/types/Product';

import { CARTS_KEY } from '@/constants/cart';
import { CartItemsCountAtom } from '@/states/cartAtom';

export function useCartList() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   ProductService.getProductsSmall().then((data) => setProducts(data));
  // }, []);

  const [cartItems, setCartItems] = useLocalStorage<Product[]>(CARTS_KEY, []);

  return { cartItems, setCartItems };
}

export function useToCart() {
  const [cartItems, setCartItems] = useLocalStorage<Product[]>(CARTS_KEY, []); // storage
  const setCartsCount = useSetAtom(CartItemsCountAtom);

  function addToCart(product: Product) {
    let newList = [];

    // Check if exists
    // Sort first last added
    const productInCart = cartItems.find((p) => p.id === product.id);
    if (productInCart) {
      // newList = cartItems.map((p) => {
      //   if (p.id === product.id) return { ...p, quantity: p.quantity + 1 };
      //   else return p;
      // });
      newList = [
        { ...productInCart, quantity: productInCart.quantity + 1 },
        ...cartItems.filter((p) => p.id !== product.id),
      ];
    } else {
      newList = [{ ...product, quantity: 1 }, ...cartItems];
    }

    setCartItems(newList);
    setCartsCount(newList.length);
    toast.success(`${product.name} added to cart`);
  }

  return { addToCart };
}
