import React from 'react';

const Home = () => {
return (
	<div
	style={{
        
		display: 'flex',
		background: '#26282a',
        color:'#fff',
		fontFamily: 'noto sans',
		justifyContent: 'Center',
		alignItems: 'Left',
		textAlign:'Justify',
		height: '100vh'
	}}
	>
		<div>  
		<img style={{ width:'500px', height:'600px ', marginRight:'100px', marginLeft:'100px'}} src="/assets/pp.jpg" />
		</div>
	
		<div style={{  marginRight:'50px' }}> 
		<h1> PRISCA  BEBBY</h1>
		<hr/>
        <h4>H e l l o, </h4>
			<h5> Recenly I was graduate from collage majoring Information System. 
			I am always interested about technology and like to learn something new to upgrade my skills.</h5>

		<a  className="btn btn-info mt-5" target="_blank" href="https://drive.google.com/file/d/1eOrU4goNqtOvbNdoi7EhfQXLAtYyJSd6/view?usp=sharing">Download CV</a>
	
		</div>
    
		
    </div>
);
};

export default Home;
