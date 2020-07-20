import React from 'react';

export default class MailForm extends React.Component{
	constructor(props){
	super(props);
	this.state = { message: ''};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({message: e.target.value})
  }

  handleSubmit(e){
		e.preventDefault(); // prevent reload page
		const templateId = 'template_w1dmWdUc';
		this.sendFeedback(templateId, {message_html: this.state.message});
		this.setState({
  			message: ''
  		});
		let submit= document.getElementById('submit');
		let area= document.getElementById('mail-area');
		submit.disabled= true;
		area.disabled= true;
  }

  clearDisabledSubmit(){
  	let submit= document.getElementById('submit');
  	let area= document.getElementById('mail-area');
		submit.disabled= false;
		area.disabled= false;
  }

	transition2(style){
		style.innerHTML= '#mail-area::placeholder' +
		'{ opacity: 0; visibility: hidden; transition: all 4s; }';
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	transition3(){
		var child= document.getElementsByTagName('head')[0].lastChild;
		document.getElementsByTagName('head')[0].removeChild(child);
	}

	sendEffect(){
		const style= document.createElement('style');
		style.type= 'text/css';
		style.innerHTML='#mail-area::placeholder' +
		'{ opacity: 1; visibility: visible; transition: opacity .5s;}';
		document.getElementsByTagName('head')[0].appendChild(style);
		setTimeout(e=> this.transition2(style), 500);
		setTimeout(this.transition3, 4000);
	}

  sendFeedback(templateId, variables){
		window.emailjs.send(
	  	'gmail', templateId,
	  	variables
  	).then(res =>{
  		this.sendEffect();
  		this.clearDisabledSubmit();
  	})
  	.catch(err => console.error(
  		'Oh well, you failed. Here some thoughts on the error that occured:',
  		err))
  }

  render(){
  	return(
			<form id="mail-form" onSubmit={this.handleSubmit}>
	    	<textarea id="mail-area"
					      	onChange={this.handleChange}
					      	required
					      	placeholder='Mail has been successfully sent'
					      	value={this.state.message}/>
		  	<input type="submit" id="submit" className='projectLink'/>
			</form> 
  	);
  }
}