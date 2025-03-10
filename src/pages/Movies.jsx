import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  const fetchMovies = async (endpoint, setter) => {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
      const data = await res.json();
      setter(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies("/movie/popular?", setPopularMovies);
    fetchMovies("/movie/top_rated?", setTopRatedMovies);
    fetchMovies("/trending/movie/week?", setTrendingMovies);
    fetchMovies("/movie/now_playing?", setNewReleases);
    fetchMovies("/discover/movie?with_genres=28", setActionMovies);
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="page-title">Movies</h1>
      <MovieCarousel title="Popular Movies" items={popularMovies} />
      <MovieCarousel title="Top Rated" items={topRatedMovies} />
      <MovieCarousel title="Trending Now" items={trendingMovies} />
      <MovieCarousel title="New Releases" items={newReleases} />
      <MovieCarousel title="Action Movies" items={actionMovies} />
      <Footer />
    </>
  );
};

export default Movies;
