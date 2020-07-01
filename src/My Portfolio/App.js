import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";
import './CSS/desktop.css';
import './CSS/mobile.css';
import Navbar from './components/Navbar.js';
import SkillsContact from './contents/Skills_N_Contact.js';
import Projects from './contents/Projects.js';
import Calculator from './projects/Calculator/CalculatorApp.js';
import bluredImg from './img/bluredImg.jpg';
import Gallery from './projects/Black-Google/App.js';

function App(){
	return(
		<Router>
			<div id="App">
				<Navbar />
				<img id='bluredImg' src={bluredImg} alt=""/>
				<Switch>
					<Route exact path="/Portfolio">
					  <Redirect to="/Portfolio/projects" />
					</Route>
					<Route exact path='/Portfolio/projects'>
						<Projects/>
					</Route>
					<Route exact path='/Portfolio/Skills_N_Contact'>
						<SkillsContact/>
					</Route>
					<Route exact path='/Portfolio/projects/calculator'>
						<Calculator/>
					</Route>
					<Route exact path='/Portfolio/projects/Black-Google'>
						<Gallery/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;