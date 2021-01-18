import React, { Component } from 'react'; // if I put Component here, I dont have to use it in the Class statement below - shortening the code
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots'; // imports array like his to the component, not used anymore since we fetch from the internet


class App extends Component { // React. has been ommited because it is included above in the import statement
	  constructor() {
	  	super()        // needs to be included in order to use parents properties in this class - takes them from robots and Card, whatever is defined in imports
	  	this.state = { // in order to use state in the App below, i need to create state with values that will change - state can change, so we need it in order to accept changing values from searchfield
		robots: [], // state lives in the parent components and passess the state to different components
		searchField: ''  // thes 2 props are from SearchBox.js file imported to App by super()
	    }
	  }

	  componentDidMount() {
	  	fetch('https://jsonplaceholder.typicode.com/users')  // fetches file from the server
	  		.then(response => response.json()) // this is what we get from fetch - response - and need to convert it to readable format by using json()
	  		.then(users => {this.setState({robots: users})})
	  }
	  // now we need new function that will read the changes in the searchBox
	  // when declaring new method (onSearchChange), always use arrow function, not like original constructor method
	  onSearchChange = (event) => {  // everytime the searchbox changes we get an event, hence event property in the commas
	  	this.setState({searchField: event.target.value}); // we need events value to change the searchfield state - target.value syntax always used for values and setState to change the state (remember this!!!)- to get its value
	  }

	  // now I changed {robots} in Cardlist component for this.state.robots cause I am using robots from state, not from components directly
	  render() {
	  	// const {robots, searchfield} = this.state; //just a function for cleaning the code to replace this.state to be written every time we need it below
	  	const filteredRobots = this.state.robots.filter(robot => {
	  		return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  	    })
  	    if (this.state.robots.length === 0) {		// shortened function would be if (!state.robots) to clean the code - shows loading bar if the array is empty
  	    	return <h1 className="tc"> Loading </h1>
  	    } else {  // if its not empty, returns the robots cards
	      return (
			<div className="tc">
				<h1>ROBOFRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>  
				</Scroll>
			</div>
	      );
	    }
      }

}

export default App;