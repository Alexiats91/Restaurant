import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Fonts
import './fonts/fonts.css'

//Components
import Header from './components/Header';
import Footer from "./components/Footer";

import {BrowserRouter, Routes, Route,} from "react-router-dom";

//Pages
import Main from "./pages/Main";
import MenuOne from "./pages/MenuOne";
import MenuTwo from "./pages/MenuTwo";
import MenuThree from "./pages/MenuThree";
import MenuFour from "./pages/MenuFour";
import SeeMore from "./pages/SeeMore";
import Product from "./pages/Product";
import Company from "./pages/Company";
import LearnMore from "./pages/LearnMore";
import GetInTouch from "./pages/GetInTouch";

import {GlobalStyle} from "./GlobalStyle";
import {ThemeProvider} from "styled-components";
import {useState} from "react";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";

//Themes
const greenTheme = {
	colors: {
		main: "#35CD8C",
		mainRGBA: "rgba(53 205 140/0.7)",
		mainSub: "#2ede93",
	}
}
const redTheme = {
	colors: {
		main: "#FE043C",
		mainRGBA: "rgba(254 4 60/0.7)",
		mainSub: "#da0333",
	}
}

//Router Scroll to top
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {window.scrollTo(0, 0);}, [pathname]);
	return null;
}

function App({store}) {
	const [theme, setTheme] = useState("green");
	const switchTheme = () => {
		theme === "green" ? setTheme("red") : setTheme("green");
	};
	return <>
		<ThemeProvider theme={theme === "green" ? greenTheme : redTheme}>
			<GlobalStyle/>
			<BrowserRouter>
				<ScrollToTop />

				<Header switchTheme={switchTheme} links={store.navigationLinks}/>

				<Routes>
					<Route index element={<Main store={store.mainPage}/>}/>

					<Route  path="/MenuOne" element={<MenuOne/>}/>
					<Route path="/MenuTwo" element={<MenuTwo/>}/>
					<Route path="/MenuThree" element={<MenuThree/>}/>
					<Route path="/MenuFour" element={<MenuFour/>}/>

					<Route path="/cabinet/profile" element={<Profile/>}/>
					<Route path="/cabinet/portfolio" element={<Portfolio/>}/>

					<Route path="/SeeMore" element={<SeeMore/>}/>

					<Route path="/product" element={<Product/>}/>
					<Route path="/company" element={<Company/>}/>
					<Route path="/learnMore" element={<LearnMore/>}/>
					<Route path="/getInTouch" element={<GetInTouch/>}/>
				</Routes>

				<Footer links={store.footerLinks}/>
			</BrowserRouter>
		</ThemeProvider>
	</>;
}

export default App;
