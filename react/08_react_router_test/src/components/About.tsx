import React from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {
	
	const navigate = useNavigate();
	
	return(
		<div>
			<h2>This is the React Router Test app</h2>
			<button onClick={() => navigate("/secret")}>Go to secret page</button>
		</div>
	)
}

export default About;