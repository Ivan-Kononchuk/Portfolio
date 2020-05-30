import React, {Fragment, Component} from 'react';
import Navitem from './NavItems.js';
import Social from './Social.js';

class Navbar extends Component{
	constructor(props){
		super(props);
		this.state={
			NavItemActive: '',
			width: ''
		};
	}

	openNav=()=>{
		this.setState({
			width: '100%'
		});
	}

	closeNav=()=>{
		this.setState({
			width: ''
		});
	}

	activeItem=x=>{
		if(this.state.NavItemActive.length>0){
			document.getElementById(this.state.NavItemActive).classList.remove('active');
		}
		this.setState({
			NavItemActive: x},
			()=>{document.getElementById(this.state.NavItemActive).classList.add('active');
		});
		
		this.closeNav();
	}

	render(){
		return(
			<Fragment>
				<button onClick={this.openNav} id='openBtn'>
					&#9776;
				</button>
				<ul id='Navbar' style={{width: this.state.width}}>
					<li id='container'>
						<button id='closebtn' onClick={this.closeNav} >
							&times;
						</button>
					</li>
					<Navitem
						item="Home123"
						tolink="/"
						activec={this.activeItem}
					/>
					<Navitem
						item="Projects"
						tolink="/projects"
						activec={this.activeItem}
					/>
					<Navitem
						item="Contact"
						tolink="/contact"
						activec={this.activeItem}
					/>
					<Social onClick={this.closeNav} />
				</ul>
			</Fragment>
		);
	}
}

export default Navbar;
