import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../ErrorBoundary';
import { connect } from 'react-redux';
import { setQuery, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    query: state.searchRobots.query,
    robots: state.robotsReducer.robots,
    pending: state.robotsReducer.isPending,
    error: state.robotsReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setQuery(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots(dispatch))
  }
};

const state = {
  robots: []
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = state;
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  onSearchChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    const { query, pending, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    });
    if(pending) {
      return <div>Loading...</div>;
    }
    return (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox searchChange={this.props.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
