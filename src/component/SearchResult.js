import React from 'react';

import '../style/SearchResult.css'

import Result from './Result';

function SearchResult(props) {
	let {results, resultState, handleDisplayClick} = props;
	let resultList = results.map((result, index) => {
		return <Result key={index} 
									profs={result} 
									displayState={resultState[index]} 
									index={index}
									handleDisplayClick={handleDisplayClick}/>;	
	})

	return (
		<ul className="result-list">{resultList}</ul>
	);
}

export default SearchResult;