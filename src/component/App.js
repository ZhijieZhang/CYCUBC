import React, { Component } from 'react';

import '../style/App.css';

import SearchBar from './SearchBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {session: '2017W'};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({session: e.target.innerHTML});
	}

  render() {
    return (
    	<div className="container">
    		<h1>Check Your Course UBC</h1>
    		<SearchBar session={this.state.session} handleClick={this.handleClick}/>
    	</div>
    );
  }
}

export default App;
