import React, {Component} from 'react';
import gitIcon from '../img/gitIcon.png';

class Social extends Component{
	render(){
		return(
			<div className="social">
				<a rel="noopener noreferrer"
					 href="https://github.com/Ivan-Kononchuk"
					 target='_blank'> 
					<img onClick={this.props.onClick} src={gitIcon} alt="gitIcon"/>
				</a>
			</div>
		);
	}
}

export default Social;