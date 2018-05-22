import React, { Component } from 'react';

import '../style/App.css';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session: '2017W', 
			input: 'CPSC 110 101',
			noResult: false,
			results: [],
			resultState: []
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDisplayClick = this.handleDisplayClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick(e) {
		this.setState({session: e.target.innerHTML});
	}

	handleChange(e) {
		this.setState({input: e.target.value});
	}

	handleDisplayClick(index) {
		let newResultState = this.state.resultState.slice();
		newResultState[index] = this.state.resultState[index] === 'show' ? 'hide' : 'show';
		this.setState({resultState: newResultState});
	}

	handleSubmit(e) {
		let [dept, course, section] = this.state.input.split(' ');
		let [_, year, session] = this.state.session.match(/(\d{4})(\w)/);

		fetch(`http://localhost:3000/course/${dept.toUpperCase()}-${course}-${section}-${year}-${session}`)
			.then((response) => response.json())
			.then((response) => {
				if (response.name === 'TBA') {
					this.setState({noResult: true});
				} else {
					this.setState((prevState) => {
						response.course = this.state.input.toUpperCase();
						return {
							noResult: false,
							results: [response, ...prevState.results],
							resultState: ['show', ...prevState.resultState]
						}
					})
				}
			});
	}

  render() {
    return (
    	<div className="container">
    		<h1>Check Your Course UBC</h1>
    		<SearchBar session={this.state.session} 
    							handleClick={this.handleClick}
    							handleChange={this.handleChange}
    							handleSubmit={this.handleSubmit}/>
    		{this.state.noResult &&
    			<div>
    				Sorry, you either entered a wrong course section or the instructor is still TBA.
    			</div>
    		}
    		<SearchResult results={this.state.results} 
    									resultState={this.state.resultState}
    									handleDisplayClick={this.handleDisplayClick}/>
    	</div>
    );
  }
}

export default App;
