import React, { Component } from 'react'; // if I put Component here, I dont have to use it in the Class statement below - shortening the code
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots'; // imports array like his to the component


class App extends Component { // React. has been ommited because it is included above in the import statement
	  constructor() {
	  	super()        // needs to be included in order to use parents properties in this class - takes them from robots and Card, whatever is defined in imports
	  	this.state = { // in order to use state in the App below, i need to create state with values that will change - state can change, so we need it in order to accept changing values from searchfield
		robots: robots, // state lives in the parent components and passess the state to different components
		searchField: ''  // thes 2 props are from SearchBox.js file imported to App by super()
	    }
	  }
	  // now we need new function that will read the changes in the searchBox
	  // when declaring new method (onSearchChange), always use arrow function, not like original constructor method
	  onSearchChange = (event) => {  // everytime the searchbox changes we get an event, hence event property in the commas
	  	this.setState({searchField: event.target.value}); // we need events value to change the searchfield state - target.value syntax always used for values and setState to change the state (remember this!!!)- to get its value
	  }

	  // now I changed {robots} in Cardlist component for this.state.robots cause I am using robots from state, not from components directly
	  render() {
	  	const filteredRobots = this.state.robots.filter(robots => {
	  		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  	    })
	    return (
			<div className="tc">
				<h1>ROBOFRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>  
			</div>
	    );
      }

}

export default App;