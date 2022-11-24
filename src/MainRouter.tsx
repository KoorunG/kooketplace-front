import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

const MainRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/products/new" element={<Register />} />
				<Route path="/users/new" element={<Join />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default MainRouter;
