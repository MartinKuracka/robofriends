import React from 'react';

const Scroll = (props) => { 
	return (
		<div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;

// this is reusable component, I can now use it anywher on the Website to make content scroll. Like this we make reusable components, with chidren as well.
