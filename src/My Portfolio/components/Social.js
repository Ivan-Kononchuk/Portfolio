import React from 'react';
import gitIcon from '../img/gitIcon.png';

function Social(props){
	return(
		<div className="gitIcon">
			<a rel="noopener noreferrer"
				 href="https://github.com/Ivan-Kononchuk"
				 target='_blank'> 
				<img onClick={props.onClick} src={gitIcon} alt="gitIcon"/>
			</a>
		</div>
	);
}

export default Social;