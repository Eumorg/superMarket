import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
import { Route, Routes } from 'react-router-dom';
import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Laptops from './components/CatalogItem/Laptops/Laptops';
import Tablets from './components/CatalogItem/Tablets/Tablets';
import Phones from './components/CatalogItem/Phones/Phones';
import Accesories from './components/CatalogItem/Accesories/Accesories';
import AllReviews from './components/ReviewsShop/AllReviews/AllReviews';
import { Trash } from './components/Trash/Trash';
import Footer from './components/footer/Footer';
import { PageDevice } from './components/PageDevice/PageDevice';
import Profile from './components/Profile/Profile';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin.jsx';
import { AdminOrder } from './components/AdminOrder/AdminOrder';

function App() {
  const dispatch = useDispatch();
  const [change, setChange] = useState(true);
  const [val, setVal] = useState(true);

  useEffect(() => {
    async function allDevice() {
      const responce = await fetch('http://localhost:4000/catalog', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await responce.json();
      dispatch({ type: 'ALL_DEVICE', payload: res });
    }
    allDevice();

    async function allReviews() {
      const responce = await fetch('http://localhost:4000/reviews', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await responce.json();
      dispatch({ type: 'ALL_REVIEWS', payload: res });
    }
    allReviews();
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='signinform' element={<SignInForm />}></Route>
        <Route path='signupform' element={<SignUpForm />}></Route>
        <Route path='catalog' element={<Catalog />}></Route>
        <Route path='allreviews' element={<AllReviews />}></Route>
        <Route path='userreviews' element={<UserRevies />}></Route>
        <Route path='/admin/admiborder' element={<AdminOrder />}></Route>
        <Route
          path='/trash'
          element={<Trash state={change} stateChange={setChange} />}
        ></Route>
        <Route path='/device/:id' element={<PageDevice />}></Route>
        <Route path='catalog/device/:id' element={<PageDevice />}></Route>
        <Route
          path='/profile'
          element={<Profile state={change} stateChange={setChange} />}
        ></Route>
        {/* Роутинг для каталогов */}
        <Route path='laptops' element={<Laptops />}></Route>
        <Route path='laptops/device/:id' element={<PageDevice />}></Route>
        <Route path='tablets' element={<Tablets />}></Route>
        <Route path='tablets/device/:id' element={<PageDevice />}></Route>
        <Route path='phones' element={<Phones />}></Route>
        <Route path='phones/device/:id' element={<PageDevice />}></Route>
        <Route path='accesories' element={<Accesories />}></Route>
        <Route path='accesories/device/:id' element={<PageDevice />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
