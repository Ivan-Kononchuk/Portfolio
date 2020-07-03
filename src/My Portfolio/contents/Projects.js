import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import calcImage from '../projects/Calculator/CalculatorImg.jpg';
import blackChrome from '../projects/Black-Chrome/56756.jpg';
import blackGoogle from '../projects/Black-Google/Images/1.jpg';

class Projects extends Component{
	openFullScreen(){
		var elem= document.getElementById('BlackChromeBackground');
		elem.classList.add('enlarge');
		document.body.style.overflow= 'hidden';
	}

	closeFullScreen(){
		var elem= document.getElementById('BlackChromeBackground');
		elem.classList.remove('enlarge');
		document.body.style.overflow= 'visible';
	}

	componentDidMount(){
		var elem= document.getElementById('BlackChromeBackground');
		elem.addEventListener('click', this.closeFullScreen);
	}

	componentWillUnmount(){
		var elem= document.getElementById('BlackChromeBackground');
		elem.removeEventListener('click', this.closeFullScreen);
	}

	render(){
		return(
			<div className='projectsContainer'>

				<div className="projectContainer">
					<h1>This Website</h1>
					<a rel='noopener noreferrer' 
						 href="https://github.com/Ivan-Kononchuk/Portfolio"
						 target='_blank'
						 className='projectLink'>See code</a>
				</div>

				<div className='projectContainer'>
					<div id="calcAlign">
						<img id='calcImage' src={calcImage} alt="Calculator"/>
					</div>
					<div className="calculatorContent">
						<h1 className='fullWidth'>Calculator on React</h1>
						<Link to="/Portfolio/projects/calculator"
									className='projectLink r-offset'>Try it</Link>
						<a rel='noopener noreferrer'
							 href="https://github.com/Ivan-Kononchuk/Calculator-on-React"
							 target='_blank'
							 className='projectLink r-offset'>See code</a>
					</div>
				</div>

				<div className="BlackBackgroundContenteiner">
					<img src={blackChrome}
							 alt="Black Chrome" id='BlackChromeBackground'
							 className='ImageBackground'/>
					<div className='BlackBackgroundContent'>
						<h1 className='BlackBackgroundHeader'>Black Chrome Theme</h1>
						<button className='projectLink invisible'
										onClick={this.openFullScreen}>Enlarge</button>
						<a rel='noopener noreferrer'
							 href="https://github.com/Ivan-Kononchuk/Black-Chrome"
							 target='_blank'
							 className='projectLink projectLink2'>See code</a>
					</div>
				</div>

				<div className="BlackBackgroundContenteiner">
					<img src={blackGoogle}
							 alt="Black Google" className='ImageBackground'/>
					<div className='BlackBackgroundContent'>
						<h1 className='BlackBackgroundHeader'>Black Google Theme</h1>
						<Link to='/Portfolio/projects/Black-Google'
									className='projectLink projectLink2'>See more</Link>
						<a rel='noopener noreferrer'
							 href="https://github.com/Ivan-Kononchuk/Black-Google"
							 target='_blank'
							 className='projectLink'>See code</a>
					</div>
				</div>
				
			</div>
		);
	}
}

export default Projects;