import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  //ORDER: First - store updates. Then we select updated store to send a request
  useEffect(() => {
  	//override existing cart with new data
  	fetch('https://some_firebase_api_url/cart.json', { 
	  	method: 'PUT',
	  	body: JSON.stringify(cart),
	});
	// this function re-executes whenever our cart changes. [cart] - dependency
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
