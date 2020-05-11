
import React, { Component } from 'react';
import Movies from './components/movies';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://localhost:8081/getall')
      .then(res => res.json())
      .then((data) => {
        this.setState({ movies: data })
      })
      .catch(console.log)
  }




  render() {
    return (
      <Movies movies={this.state.movies} />
    );
  }
}

export default App;