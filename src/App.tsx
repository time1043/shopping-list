import Navbar from './components/Navbar';
import ShopList from './features/shop/list/ShopList';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <ShopList />
      </main>
    </>
  );
}
