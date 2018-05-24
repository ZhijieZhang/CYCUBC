import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../style/SearchResult.css'

import Result from './Result';

function SearchResult(props) {
	let {results, resultState, handleDisplayClick, handleDeletionClick} = props;
	let resultList = results.map((result, index) => {
		return <Result key={result.id} 
									profs={result} 
									displayState={resultState[index]} 
									index={index}
									handleDisplayClick={handleDisplayClick}
									handleDeletionClick={handleDeletionClick}/>;	
	})

	return (
		<ul className="result-list">
			<ReactCSSTransitionGroup
				transitionName='result'
				transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
				{resultList}
			</ReactCSSTransitionGroup>
		</ul>
	);
}

export default SearchResult;