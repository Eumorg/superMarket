
// import React, { useEffect, useState } from 'react';
// import { PageDevice } from './components/PageDevice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
// import Catalog from "./components/Catalog/Catalog";
import { store } from './store/index';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {SignInForm} from './components/SignInForm/SignInForm'
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';

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
    <BrowserRouter> 
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
        
          <Route path='main' element={<Main />}></Route>
          <Route path='signinform' element={<SignInForm />}></Route>
          <Route path='signupform' element={<SignUpForm />}></Route>
          <Route path='catalog' element={<Catalog />}></Route> 
          {/* <Route path='basket' element={</>}></Route>  // роут для карзины не нашел компанент */}
        </Routes>
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
