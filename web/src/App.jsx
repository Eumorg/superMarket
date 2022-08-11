// import React, { useEffect, useState } from 'react';
// import { PageDevice } from './components/PageDevice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
// import Catalog from "./components/Catalog/Catalog";
import { store } from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { Trash } from './components/Trash/Trash';
import Footer from './components/footer/Footer';
import { PageDevice } from './components/PageDevice/PageDevice';
import Profile from './components/Profile/Profile';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='signinform' element={<SignInForm />}></Route>
            <Route path='signupform' element={<SignUpForm />}></Route>
            <Route path='catalog' element={<Catalog />}></Route>
            <Route path='/trash' element={<Trash />}></Route>
            <Route path='/device/:id' element={<PageDevice />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            contact
          </Routes>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
