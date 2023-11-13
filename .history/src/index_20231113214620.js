import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Seller from './pages/Seller/Seller';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'users/:id',
				element: <Users />,
				children: [{ path: 'seller', element: <Seller /> }],
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'product/:productId',
				element: <Product />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>,
);
