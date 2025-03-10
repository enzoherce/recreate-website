import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const Series = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [dramaSeries, setDramaSeries] = useState([]);

  const fetchSeries = async (endpoint, setter) => {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
      const data = await res.json();
      setter(data.results || []);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries("/tv/popular?", setPopularSeries);
    fetchSeries("/tv/top_rated?", setTopRatedSeries);
    fetchSeries("/trending/tv/week?", setTrendingSeries);
    fetchSeries("/tv/on_the_air?", setNewReleases);
    fetchSeries("/discover/tv?with_genres=18", setDramaSeries); // Genre 18 = Drama
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="page-title">TV Series</h1>
      <MovieCarousel title="Popular Series" items={popularSeries} />
      <MovieCarousel title="Top Rated" items={topRatedSeries} />
      <MovieCarousel title="Trending Now" items={trendingSeries} />
      <MovieCarousel title="New Releases" items={newReleases} />
      <MovieCarousel title="Drama Series" items={dramaSeries} />
      <Footer />
    </>
  );
};

export default Series;
