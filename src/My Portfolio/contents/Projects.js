import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import calcImage from '../projects/Calculator/CalculatorImg.jpg';
import blackChrome from '../projects/Black-Chrome/56756.jpg';
import blackGoogle from '../projects/Black-Google/Images/1.jpg';

export default function Projects(){
	const ref= useRef();

	function openFullScreen(){
		ref.current.classList.add('enlarge');
		document.body.style.overflow= 'hidden';
	}

	function closeFullScreen(){
		ref.current.classList.remove('enlarge');
		document.body.style.overflow= 'visible';
	}

	useEffect(()=> {
		const elem= ref.current;

		function escCheck(e){
			if (e.keyCode === 27) closeFullScreen();
		}

		elem.addEventListener('click', closeFullScreen);
		document.body.addEventListener('keydown', escCheck);

		return ()=> {
			elem.removeEventListener('click', closeFullScreen);
			document.body.removeEventListener('keydown', escCheck);
		}
	}, []); 

 return(
		<div className='projectsContainer'>

			<div className="projectContainer">
				<h1>This Website</h1>
				<a rel='noopener noreferrer' target='_blank'
					 href="https://github.com/Ivan-Kononchuk/Portfolio"
					 className='projectLink'>See code</a>
			</div>

			<div className='projectContainer'>
				<div id="calcAlign">
					<img id='calcImage' src={calcImage} alt="Calculator"/>
				</div>
				<div className="calculatorContent">
					<h1 className='fullWidth'>Calculator on React</h1>
					<Link to="/Portfolio/Projects/Calculator"
								className='projectLink r-offset'>Try it</Link>
					<a rel='noopener noreferrer' target='_blank'
						 href="https://github.com/Ivan-Kononchuk/Calculator-on-React"
						 className='projectLink r-offset'>See code</a>
				</div>
			</div>

			<div className="BlackBackgroundContenteiner">
				<img src={blackChrome} ref={ref} id='BlackChromeBackground'
						 alt="Black Chrome" className='ImageBackground'/>
				<div className='BlackBackgroundContent'>
					<h1 className='BlackBackgroundHeader'>Black Chrome Theme</h1>
					<button className='projectLink invisible'
									onClick={openFullScreen}>Enlarge</button>
					<a rel='noopener noreferrer' target='_blank'
						 href="https://github.com/Ivan-Kononchuk/Black-Chrome"
						 className='projectLink projectLink2'>See code</a>
				</div>
			</div>

			<div className="BlackBackgroundContenteiner">
				<img src={blackGoogle} alt="Black Google"
						 className='ImageBackground'/>
				<div className='BlackBackgroundContent'>
					<h1 className='BlackBackgroundHeader'>Black Google Theme</h1>
					<Link to='/Portfolio/Projects/Black-Google'
								className='projectLink projectLink2'>See more</Link>
					<a rel='noopener noreferrer' target='_blank'
						 href="https://github.com/Ivan-Kononchuk/Black-Google"
						 className='projectLink'>See code</a>
				</div>
			</div>
			
		</div>
	);
}