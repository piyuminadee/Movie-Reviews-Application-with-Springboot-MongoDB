import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import {Layout} from "./Component/Layout";
import { Route, Routes } from 'react-router-dom';
import Home from "./Component/home/Home";
import Header from "./Component/header/header";
import Trailer from './Component/Trailer/Trailer';



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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          </Route>

        </Routes>
      </div>
  );
}

export default App;
