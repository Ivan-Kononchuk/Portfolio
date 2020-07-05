import React, {Fragment, Component} from 'react';
import {NavLink} from 'react-router-dom';
import Social from './Social.js';

class Navbar extends Component{
	constructor(props){
		super(props);
		this.state={
			NavItemActive: '',
			width: '',
			overflow: ''
		};
	}

	openNav=()=>{
		this.setState({
			width: '100%'
		});
		document.body.style.overflow= 'hidden';
	}

	closeNav=()=>{
		this.setState({
			width: '',
			overflow: ''
		});
		document.body.style.overflow= 'visible';
	}

	render(){
		return(
			<Fragment>

				<button onClick={this.openNav} id='openBtn'> &#9776; </button>

				<nav id='Navbar' style={{ width: this.state.width }}>

					<div id='alignRight'>
						<button id='closebtn' onClick={this.closeNav} >
							&times;
						</button>
					</div>
					
					<NavLink className='Navbarlink' activeClassName="active"
						onClick={this.closeNav}
						to="/Portfolio/Projects">
						Projects
					</NavLink>
				
					<NavLink className='Navbarlink' activeClassName="active"
						onClick={this.closeNav}
						to='/Portfolio/Skills_N_Contact'>
						Skills & Contact
					</NavLink>

					<Social onClick={this.closeNav} />

				</nav>

			</Fragment>
		);
	}
}

export default Navbar;