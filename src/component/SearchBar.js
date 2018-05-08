import React from 'react';

import '../style/SearchBar.css';

function SearchBar(props) {
	function isActive(session) {
		return props.session === session ? 'active' : '';
	}

	return(
		<div className="searchbar">
			<ul id="session">
				<li className={isActive('2017W')} onClick={props.handleClick}>2017W</li>
				<li className={isActive('2018S')} onClick={props.handleClick}>2018S</li>
			</ul>
			<input id="user-input" type="text" placeholder="CPSC 110 101" autoFocus/>
			<button id="search-btn">Search</button>
		</div>
	);
}

export default SearchBar;