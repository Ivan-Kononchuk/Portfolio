import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
						<img id='calcImage' src='https://i.ibb.co/9c6d4pn/te.png' alt="Calculator"/>
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
					<img src="https://user-images.githubusercontent.com/44400566/86442225-1d7ec980-bd16-11ea-9b43-1d94283bc1c1.jpg"
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
					<img src="https://user-images.githubusercontent.com/44400566/86440326-eeb32400-bd12-11ea-9b7d-356660024489.jpg"
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