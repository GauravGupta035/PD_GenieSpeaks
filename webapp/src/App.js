import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductList from "./components/ProductList/ProductList";
// import { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { SearchContextProvider } from "./context/SearchContext/SearchContext";
import ProductReview from "./components/ProductReview/ProductReview";
import { UserContextProvider } from "./context/UserContext/UserContext";

const App = () => {
	return (
		<div className='App'>
			<UserContextProvider>
			<SearchContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/search' element={<ProductList />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='/product/:id' element={<ProductDetail />} />
						<Route path='/product/:id/review' element={<ProductReview />} />
					</Routes>
				</BrowserRouter>
			</SearchContextProvider>
			</UserContextProvider>
		</div>
	);
};

export default App;
