import React, { useEffect, useState } from 'react';
import { PageDevice } from './components/PageDevice';

function App() {
	const [products, setProducts] = useState([]);
	async function fetchProd() {
		const response = await fetch('https://fakestoreapi.com/products?limit=1')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}
	useEffect(() => {
		fetchProd();
	}, []);
	return (
		<div>
			{products.map((el) => (
				<PageDevice className='device__container' key={el.id} product={el} />
			))}
		</div>
	);
}

export default App;
