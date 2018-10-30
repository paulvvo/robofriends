import React, { Component } from 'react';
import {connect} from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField} from "../actions";

//the searchfield that is going to be returned is going to be used
//as props for the app component

const mapStateToProps = state =>{
	return{
		searchField:state.searchField
		// searchField:state.searchRobots.searchField
	}
}
//dispatch is what triggers the action
//so the action gets dispatch to the reducer
//hey tell me what props i should listen to that are actions

const mapDispatchToProps = (dispatch) =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      // searchfield: ''
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    // const { robots, searchfield } = this.state;
    const { robots} = this.state;
		const {searchField, onSearchChange} = this.props; //new with redux
    const filteredRobots = robots.filter(robot =>{
      // return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          // <SearchBox searchChange={this.onSearchChange}/>
          <SearchBox searchChange={onSearchChange}/> //new with redux
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

//connect is a higher order function, so that means it returns another func
//passing app into the returning func. This step is telling app about redux
//store and making app subscribe to it and to know about changes in the
//store. basicall the connect is the 2nd step to fully connect with the store
//passed down by the provider

// now you need to tell app what to listen to, so what state to listen to
// (mapStateToProps) and what actions to listent to (mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(App);
