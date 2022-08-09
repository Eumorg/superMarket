import React, { useEffect, useState } from 'react';
import { PageDevice } from './components/PageDevice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
import Catalog from "./components/Catalog/Catalog";
import { store } from './store/index';
import { Provider } from 'react-redux';

function App() {
  // const [products, setProducts] = useState([]);
  // async function fetchProd() {
  // 	const response = await fetch('https://fakestoreapi.com/products?limit=1')
  // 		.then((res) => res.json())
  // 		.then((data) => setProducts(data));
  // }
  // useEffect(() => {
  // 	fetchProd();
  // }, []);
  //   <div>
  // 	{products.map((el) => (
  // 		<PageDevice className='device__container' key={el.id} product={el} />
  // 	))}
  // </div>
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
