import BasicDialog from './components/BasicDialog';
import Navbar from './components/Navbar';
import CartList from './features/cart/list/CartList';
import ShopList from './features/shop/list/ShopList';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <ShopList />
        <BasicDialog>
          <CartList />
        </BasicDialog>
      </main>
    </>
  );
}
