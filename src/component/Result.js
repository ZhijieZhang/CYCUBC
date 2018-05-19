import React from 'react';

function Result(props) {
	let {profs} = props;

	return(
		<li>
			{profs.map((prof,index) => {
				return(
					<div key={index}>
						{prof.name}
						{prof.rating}
					</div>
				);
			})}
		</li>
	);
}

export default Result;