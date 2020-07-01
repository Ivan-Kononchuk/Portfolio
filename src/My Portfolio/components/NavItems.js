import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navitem extends Component{
	render(){
		return(
			<li	id={this.props.item} className='Navbarli'>
				<NavLink id='Navbarlink' activeClassName="active"
					onClick={this.props.closeNav}
					to={this.props.tolink} exact
				>
					{this.props.item}
				</NavLink>
			</li>
		);
	}
}

export default Navitem;