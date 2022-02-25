import React from 'react';

const Studio = () => {
return (
	<container
	style={{
		display: 'flex',
		background: '#26282a',
        color:'#fff',
		fontFamily: 'trash hand',
		justifyContent: 'Center',
		alignItems: 'Right',
		textAlign:'Center'	
	}}
	>
	

	
<div style={{marginLeft: '90px'}}>
	<div className='mt-50'>
		<div className="card mr-7" style ={{width: '300px', marginRight: '10px'}}>
			<img src="/assets/pic5.jpg"  style ={{width:'300px', height:'300px'}} class="card-img-top" alt="..."></img>
		</div>
		<p>Sun sunset</p>
		
	</div>

		<div className='mt-50'>
		<div className="card" style ={{width: '300px'}}>
			<img src="/assets/pic1.jpg"  style ={{width:'300px', height:'300px'}} class="card-img-top" alt="..."></img>
		</div>
		<p>Christmas eve</p>
	</div>
</div>

	<div className=' mr-100'>
	<div className='mt-50'>
		<div className="card" style ={{width: '300px', marginRight: '10px'}}>
			<img src="/assets/pic4.jpg"  style ={{width:'300px', height:'300px'}} class="card-img-top" alt="..."></img>
		</div>
		<p>Rainbow Clouds</p>
	</div>

		<div className='mt-50'>
		<div className="card" style ={{width: '300px'}}>
			<img src="/assets/pp2.jpg"  style ={{width:'300px', height:'300px'}} class="card-img-top" alt="..."></img>
		</div>
		<p>Little Me</p>

	</div>
	</div>

	<div className='text' style={{marginLeft:'20px', marginTop: '200px'}}>
		<h1> Pubee Studio </h1>
		<h4> Making Art . Hobbies . Practice</h4>
		<p>Welcome to my little digital art space. There are random thoughts I draw in my leisure time </p>
		<a className="btn btn-outline-light" target="_blank" href="https://www.instagram.com/pubee.studio/">Discover More</a>
	</div>
	

	</container>
);
};

export default Studio;
