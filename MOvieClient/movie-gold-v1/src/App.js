import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try
    {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
     
    }
    catch(err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(()=> {
     getMovies();
  }, [])
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route ></Route>
      </Routes> */}
    </div>
  );
}

export default App;
