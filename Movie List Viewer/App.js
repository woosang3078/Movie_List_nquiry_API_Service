import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }
    getMovies = async () => {
        const { data: {
            movieListResult:
            {movieList}
        }
    }
    = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888");
    console.log(movieList)
    this.setState({ movies: movieList, isLoading: false })
  }
  componentDidMount() {
      this.getMovies();
  }

  render() {
      const { isLoading, movies } = this.state;
      return (
          <div>{isLoading ? "Loading..." : movies.map((movie) => {
              console.log(movie);
              return (
                  <Movie key={movie.moiveCd} title={movie.movieNm} genre={movie.genreAlt} prdtYear={movie.prdtYear} />
              )
          })}</div>
      );
  }
}

export default App;