import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const state = {
  robots: [],
  query: ''
};

class App extends Component {

  constructor() {
    super();
    this.state = state;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ robots: data }));
  }

  onSearchChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    const { robots, query } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    });
    if(!robots.length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
