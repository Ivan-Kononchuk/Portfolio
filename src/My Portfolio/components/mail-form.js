import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function MailForm(){
	const [message, setMessage]= useState('');
	const myRef= useRef();

	function handleChange(e){
    setMessage(e.target.value);
  }

  function handleSubmit(e){
		e.preventDefault(); // prevent reload page
	  sendFeedback();
		setMessage('');
		let submit= document.getElementById('submit');
		let area= document.getElementById('mail-area');
		submit.disabled= true;
		area.disabled= true;
  }

  function clearDisabledSubmit(){
  	let submit= document.getElementById('submit');
  	let area= document.getElementById('mail-area');
		submit.disabled= false;
		area.disabled= false;
  }

  function transition2(style){
		style.innerHTML= '#mail-area::placeholder' +
		'{ opacity: 0; visibility: hidden; transition: all 4s; }';
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	function transition3(){
		var child= document.getElementsByTagName('head')[0].lastChild;
		document.getElementsByTagName('head')[0].removeChild(child);
	}

	function sendEffect(){
		const style= document.createElement('style');
		style.type= 'text/css';
		style.innerHTML='#mail-area::placeholder' +
		'{ opacity: 1; visibility: visible; transition: opacity .5s;}';
		document.getElementsByTagName('head')[0].appendChild(style);
		setTimeout(e=> transition2(style), 500);
		setTimeout(transition3, 4000);
	}

	function sendFeedback(e){
		emailjs.sendForm(
	  	'service_98a1f1l', 'template_2bshxgp',
	  	myRef.current, {publicKey: 'kHJP38xQRd0sJ6Nfs'}
  	).then(res =>{
  		sendEffect();
  		clearDisabledSubmit();
  	})
  	.catch(err => console.error(
  		'Oh well, you failed. Here some thoughts on the error that occured:',
  		err))
  }

  return(
			<form ref={myRef} id="mail-form" onSubmit={handleSubmit}>
	    	<textarea id="mail-area" name='message'
					      	onChange={handleChange}
					      	required
					      	placeholder='Mail has been successfully sent'
					      	value={message}/>
		  	<input type="submit" id="submit" className='projectLink'/>
			</form> 
  	);
}