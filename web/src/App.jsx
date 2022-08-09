
import React, { useEffect, useState } from 'react';
import { PageDevice } from './components/PageDevice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
import Catalog from "./components/Catalog/Catalog";
import { store } from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        
      <div>
        {/* <Catalog /> */}
        <Main />
      </div>
      </BrowserRouter>
    </Provider>
  );

}

export default App;
