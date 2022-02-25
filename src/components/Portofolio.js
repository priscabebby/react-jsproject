import React from 'react';

const Portofolio = () => {
return (
	<container
	style={{
		display: 'flex',
		background: '#26282a',
        color:'#fff',
		fontFamily: 'trash hand',
		justifyContent: 'Left',
		alignItems: 'Right',
		height:'100vh'
		
	}}
	>

	<div style={{ marginTop:'60px'}} >  
		<img style={{ width:'300px', marginRight:'100px', marginLeft:'100px'}} src="/assets/c1.jpg" />
		<img style={{ width:'300px', marginRight:'100px', marginLeft:'100px', marginTop:'10px'}} src="/assets/c2.jpg" />
		</div>
	
		<div style={{  marginRight:'50px', marginTop:'60px'  }}> 
		<h1> The Works</h1>
		<hr/>
        <h4 style={{  color:'lavender'}}>Misdinar Paschal's Website </h4>
			<h5 style={{  color:'lavender'}}> This is a final project for graduation. For this project, I do analyst for user needs, making a design flow of the site,
			the structure and the interface. The purpose of making this website is to help the management of altar services 
			(Misdinar) at St. Paschal Church to manage data and convey the latest information to all members regarding altar service activities to make it more efficient.
			To make this system i uses the PHP programming language with the CodeIgniter Framework and MySQL for database processing.
			</h5>
			
		<a  className="btn btn-outline-light mt-3" target="_blank" href="https://msdrpaskalis.my.id">See Site</a>
	
	<hr/>
        <h4 style={{  color:'lavender'}}>Tourist Information Website </h4>
			<h5 style={{  color:'lavender'}}> For this project, creating a interface for frontend and backend view, regarding tourist destination in the Java destination area
				Using the bootstrap framework, HTML, CSS, PHP languge.</h5>

		<a  className="btn btn-outline-light mt-5" target="_blank" href="http://projectprisca.epizy.com">See Site</a>
	
		</div>
	
	

	</container>
);
};

export default Portofolio;
