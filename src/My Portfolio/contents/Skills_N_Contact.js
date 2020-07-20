import React from 'react';
import MailForm from '../components/mail-form.js';

export default function Skills_N_Contact(){
  function copyMail(){
  	// anti mail bot parser spam
  	document.getElementById('gmail').value= 'myyzrik@gmail.com';

  	const mail= document.getElementById('gmail');
  	mail.setAttribute('type', 'text');
  	mail.select();
		document.execCommand('copy');
		mail.setAttribute('type', 'hidden');

		let tooltip= document.getElementById('gmail-span');
		tooltip.style.transition= 'none';
		tooltip.style.opacity= 1;
  }

  function mouseOut(){
		let tooltip= document.getElementById('gmail-span');
		tooltip.style.transition= 'opacity ease-in 1s';
		tooltip.style.opacity= 0;
  }

	return(
		<div className='Content'>

			<div className="fleft clearfix">

				<div className="narrow">
					<table>
						<tbody>
							<tr><th>Skills</th></tr>
							<tr><td>HTML</td></tr>
							<tr><td>CSS</td></tr>
							<tr><td>JavaScript</td></tr>
							<tr><td>ReactJS</td></tr>
						</tbody>
					</table>
				</div>

				<div className="tooltip">
					<button onClick={copyMail} onMouseOut={mouseOut}
									className='projectLink'>Copy Gmail</button>
					<span className="tooltiptext" id='gmail-span'>Copied</span>
					<input type='hidden' id='gmail' value=''/>
				</div>

			</div>

			<MailForm />
			
		</div>
	);
}