import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './CSS/desktop.css';
import './CSS/mobile.css';
import Navbar from './components/Navbar.js';
import Home from './contents/Home.js';
import Calculator from './contents/Projects.js'
import Contact from './contents/Contact.js';
import bluredImg from './img/bluredImg.jpg';

function App(){
	return(
		<Router>
			<div className="App">
				<Navbar />
				<img id='bluredImg' src={bluredImg} alt=""/>
				<Route exact path='/Portfolio/'>
					<Home/>
				</Route>
				<Route exact path='/Portfolio/projects'>
					<Calculator/>
				</Route>
				<Route exact path='/Portfolio/contact'>
					<Contact/>
				</Route>
			</div>
		</Router>
	);
}

export default App;

