import React, { Component } from 'react';

import '../style/App.css';

import SearchBar from './SearchBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session: '2017W', 
			input: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick(e) {
		this.setState({session: e.target.innerHTML});
	}

	handleChange(e) {
		this.setState({input: e.target.value});
	}

	handleSubmit(e) {
		let [dept, course, section] = this.state.input.split(' ');
		let [_, year, session] = this.state.session.match(/(\d{4})(\w)/);

		fetch(`http://localhost:3000/course/${dept}-${course}-${section}-${year}-${session}`)
			.then(console.log);
		console.log(`1`);
	}

  render() {
    return (
    	<div className="container">
    		<h1>Check Your Course UBC</h1>
    		<SearchBar session={this.state.session} 
    							handleClick={this.handleClick}
    							handleChange={this.handleChange}
    							handleSubmit={this.handleSubmit}/>
    	</div>
    );
  }
}

export default App;
