import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchSeries = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        );
        const data = await res.json();
        setSeries(data.results || []);
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="spacer"></div> {/* */}
      <MovieCarousel title="Trending Movies" items={movies} />
      <MovieCarousel title="Trending Series" items={series} />
      <Footer />
    </>
  );
};

export default Home;
