import React, {Component} from 'react';
import MailForm from '../components/mail-form.js';

export default class Skills_N_Contact extends Component{
	constructor(props){
	super(props);
	this.copyMail= this.copyMail.bind(this);
  }

  copyMail(inputId, spanId){
  	const mail= document.getElementById(inputId);
  	mail.setAttribute('type', 'text');
  	mail.select();
		document.execCommand('copy');
		mail.setAttribute('type', 'hidden');
		
		document.getElementById('gmail-span').textContent= 'Copy'; 
		document.getElementById('email-span').textContent= 'Copy';

		// anti bot mail spam
		document.getElementById('gmail').value= 'myyzrik@gmail.com';
		document.getElementById('email').value= 'zoibertonfd@mail.ru';

		const tooltip= document.getElementById(spanId);
		tooltip.textContent= 'Copied!';
  }

	render(){
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
						<button onClick={e=> this.copyMail('email', 'email-span')}
										className='projectLink'>Email</button>
						<span className='tooltiptext' id='email-span'>Copy</span>
						<input type='hidden' id='email' value=''/>
					</div>

					<div className="tooltip">
						<button onClick={e=> this.copyMail('gmail', 'gmail-span')}
										className='projectLink'>Gmail</button>
						<span className="tooltiptext" id='gmail-span'>Copy</span>
						<input type='hidden' id='gmail' value=''/>
					</div>
				</div>

				<MailForm />
				
			</div>
		);
	}
}