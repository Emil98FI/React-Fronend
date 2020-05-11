
import React, { Component } from 'react';
import Movies from './components/movies';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch('https://restful-api-project1.herokuapp.com/getall')
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