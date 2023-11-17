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
import User from './pages/User/User/User';
import { Provider } from 'react-redux';
import store from './store/store';

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
				children: [
					{ index: true, element: <User /> },
					{ path: 'seller', element: <Seller /> },
				],
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
		<Provider store={store}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>,
);
