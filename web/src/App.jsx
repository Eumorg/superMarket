import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PageDevice } from './components/PageDevice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
// import Catalog from "./components/Catalog/Catalog";
import { store } from './store/index';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Laptops from './components/CatalogItem/Laptops/Laptops';
import Tablets from './components/CatalogItem/Tablets/Tablets';
import Phones from './components/CatalogItem/Phones/Phones';
import Accesories from './components/CatalogItem/Accesories/Accesories';
import { Trash } from './components/Trash/Trash';
import Footer from './components/footer/Footer';
import { PageDevice } from './components/PageDevice/PageDevice';
import Profile from './components/Profile/Profile';
import { Contact } from './components/Contact/Contact';
import { Admin } from './components/Admin/Admin';
// import { Modal } from './components/Modal/Modal';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		async function text() {
			const responce = await fetch('http://localhost:4000/catalog', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const res = await responce.json();
			// return await responce.json();
			dispatch({ type: 'ALL_DEVICE', payload: res });
		}
		text();
	}, []);

	return (
		<div>
			<Header />
			<Routes>
				{/* <Route path='modal' element={<Modal />}></Route> */}
				<Route path='/' element={<Main />}></Route>
				<Route path='signinform' element={<SignInForm />}></Route>
				<Route path='signupform' element={<SignUpForm />}></Route>
				<Route path='catalog' element={<Catalog />}></Route>
				<Route path='/trash' element={<Trash />}></Route>
				<Route path='/device/:id' element={<PageDevice />}></Route>
				<Route path='catalog/device/:id' element={<PageDevice />}></Route>
				<Route path='/profile' element={<Profile />}></Route>
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
