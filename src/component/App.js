import React, { Component } from 'react';

import '../style/App.css';

import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
    	<div className="container">
    		<h1>Check Your Course UBC</h1>
    		<SearchBar/>
    	</div>
    );
  }
}

export default App;
