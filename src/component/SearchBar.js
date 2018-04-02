import React from 'react';

import '../style/SearchBar.css';

function SearchBar(props) {
	return(
		<div className="searchbar">
			<ul id="session">
				<li>2017 W</li>
				<li>2018 S</li>
			</ul>
			<input id="user-input" type="text" placeholder="CPSC 110 101" autoFocus/>
			<button id="search-btn">Search</button>
		</div>
	);
}

export default SearchBar;