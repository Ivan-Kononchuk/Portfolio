import React from 'react';
import gitIcon from '../img/gitIcon.png';

export default function Social(props){
	return(
		<div className="gitIcon">
			<a rel="noopener noreferrer"
				 href="https://github.com/Ivan-Kononchuk"
				 target='_blank'> 
				<img onClick={props.onClick}
						 src={gitIcon}
						 alt="gitIcon"
						 />
			</a>
		</div>
	);
}