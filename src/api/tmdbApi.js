const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Get API key from .env
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Fetch trending movies
 */
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Return only movie results
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

/**
 * Fetch movie details by ID
 */
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
