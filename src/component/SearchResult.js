import React from 'react';

import Result from './Result';

function SearchResult(props) {
	let {results} = props;
	let resultList = results.map((result, index) => {
		return <Result key={index} profs={result}/>;	
	})

	return (
		<ul>{resultList}</ul>
	);
}

export default SearchResult;