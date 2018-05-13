import React from 'react';

import '../style/SearchBar.css';

function SearchBar(props) {
	let {session, handleClick, handleChange, handleSubmit} = props;

	function isActive(_session) {
		return session === _session ? 'active' : '';
	}

	return(
		<div className="searchbar">
			<ul id="session">
				<li className={isActive('2017W')} onClick={handleClick}>2017W</li>
				<li className={isActive('2018S')} onClick={handleClick}>2018S</li>
			</ul>
			<input id="user-input" type="text" placeholder="CPSC 110 101" autoFocus
						onChange={handleChange}/>
			<button id="search-btn" onClick={handleSubmit}>Search</button>
		</div>
	);
}

export default SearchBar;