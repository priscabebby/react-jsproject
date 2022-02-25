import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
return (
	<div
	style={{
		display: 'flex',
		background: '#26282a',
        color:'#fff',
		fontFamily: 'trash hand',
		justifyContent: 'Center',
		alignItems: 'Center',
		textAlign:'Justify',
		height: '100vh'
	}}
	>
	<div style={{marginRight: '50px', marginBottom:'20px'}}>
	
	</div>

	<div style={{marginRight:'20px'}}>
	<h3> <FaRegEnvelope/> Email</h3>
	<h2>priscabebby@gmail.com</h2>
	</div>
	<div>
	<div style={{marginRight:'20px', marginBottom:'5px'}}>
	<h4> <FaInstagram/> Follow Me </h4> 
	<h2><a style={{color:'lavender'}} target="_blank" href="https://www.instagram.com/pubee.studio/">@pubee.studio</a></h2>
	</div>
	<div>
		<hr></hr>
	<h4> <FaLinkedin/> Connect on me </h4> 
	<h2><a style={{color:'lavender'}} target="_blank" href="https://www.linkedin.com/in/prisca-bebby-021447216/">@priscabebby</a></h2>
	</div>
	</div>
	

	</div>
);
};

export default Contact;
