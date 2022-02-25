import React from 'react';

const Skills = () => {
return (
	<div
	style={{
		display: 'flex',
		background: '#26282a',
        color:'#fff',
		fontSize:'10 px',
		fontFamily: 'trash hand',
		justifyContent: 'Center',
		alignItems: 'Right',

	}}
	>
<h3>

<ul className="l" style={{background: '#26282a', marginTop:'30px', textAlign:'left'}}>
<p>H a r d - S k i l l s </p>
<hr />
	<li className="lg">HTML</li>
	<li className="lg">CSS</li>
	<li className="lg">JavaScript</li>
	<li className="lg">PHP</li>
	<li className="lg">CodeIgniter</li>
	<li className="lg">Sql Server</li>
	<li className="lg">MySQL</li>
	<li className="lg">Oracle</li>
	<li className="lg">Microsoft (WORD, EXCEL, PPT)</li>
	</ul>

<ul className="l" style={{background: '#26282a', marginTop:'30px', marginLeft: '30px', textAlign:'right'}}>
<p>S o f t - S k i l l s</p>
<hr />
	<p className="lg">Team Work</p>
	<p className="lg">Problem Solving</p>
	<p className="lg">Creativity</p>
	<p className="lg">Analyst</p>
	</ul>
</h3>
	</div>
);
};

export default Skills;
