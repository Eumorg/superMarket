import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PageDevice } from './components/PageDevice';
import { Trash } from './components/Trash';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
import Catalog from './components/Catalog/Catalog';
import { store } from './store/index';
import { Provider } from 'react-redux';

function App() {
	// const devices = useSelector((store) => store.devices);

	return (
		<Provider store={store}>
			<div>
				{/* <Catalog /> */}
				{/* <Main /> */}

				{/* <PageDevice /> */}
				<Trash />
			</div>
		</Provider>
	);
}

export default App;
