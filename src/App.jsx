import {useState, useEffect} from 'react'
import Search from './components/search'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const API_OPTIONS = {
  method: 'GET', //what type of request we are making
  headers: {
    accept: 'application/json', //what type of response we want
    Authorization: `Bearer ${API_KEY}`//who is making those requests.
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);// to start the countdown
    setErrorMessage(''); // Reset error message before fetching
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies. Please try again later.');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    }catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setIsLoading(false); // to stop the countdown
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>

      <div className="pattern">

      </div>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero" />
          <h1>Find <span className="text-gradient">Movies</span> 
          You'll Enjoy Without the Hassle</h1>
        </header>

       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

       <section>
          <h2>All Movie</h2>

          {isLoading ? (
            <P key={movie.id} className="text-white">Loading...</P>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p className='text-white'>{movie.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App

//@ 1:19:00