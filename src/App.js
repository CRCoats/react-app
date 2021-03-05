import React from 'react';
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import ListView from "./ListView";
import { getMoviesByName } from './utils';

const Alert = ({message='', show=false}) => {
  return (
    <p>{message}</p>
  )
}


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      search: 'batman',
      isLoading: 'false',
      movies: [],
      error: null,
    }
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })

    setTimeout( async () => {
      try {
        const MovieData = await getMoviesByName(this.state.search)
        this.setState({
          isLoading: false,
          movies: MovieData,
          error: null
        })
      } catch (error) {
        this.setState({
          isLoading: false,
          movies: [],
          error: error,
        })
      }
    }, 5000);

  }

  componentDidUpdate() {
    console.log(this.state)
  };

  render() {
    return (
      <>
        { this.state.isLoading
        ? <h1>Loading data</h1>
        : (

              <>
              <ListView 
                list={this.state.movies?.Search} 
                render={({Title, Poster, Type}) => <MovieCard title={Title} poster={Poster} type={Type} />}
              />
              <MovieDetails
                posterUrl = 'https://upload.wikimedia.org/wikipedia/en/8/83/Batman_returns_poster2.jpg'
                title = 'Batman Returns'
                rated = 'PG-13'
                runtime = {183}
                genre = 'Sci-Fi'
                rating = {0}
                plot = 'Batman beats up a bunch of bad guys.'
                actors = {'Michael Keaton, Michelle Pfieffer'}
              />
            </>
          )
        }
      </>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
