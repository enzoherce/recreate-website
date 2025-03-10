import { useState, useEffect } from "react";
import "../styles/Hero.css"; 

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setMovie(data.results[0]);
      } catch (error) {
        console.error("Error fetching popular movie:", error);
      }
    };

    fetchPopularMovie();
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h2>{movie?.title || "Loading..."}</h2>
        <p>{movie?.overview || "No description available."}</p>
        <button>Watch Now</button>
      </div>
    </div>
  );
};

export default Hero;
