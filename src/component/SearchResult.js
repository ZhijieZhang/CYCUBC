import React from 'react';

import '../style/SearchResult.css'

import Result from './Result';

function SearchResult(props) {
	let {results} = props;
	let resultList = results.map((result, index) => {
		return <Result key={index} profs={result}/>;	
	})

	return (
		<ul className="result-list">{resultList}</ul>
	);
}

export default SearchResult;