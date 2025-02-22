import Navbar from "../components/Navbar";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const movies1 = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"];
const movies2 = [...movies1];
const movies3 = [...movies1];
const movies4 = [...movies1];
const movies5 = [...movies1];

const Movies = () => {
  return (
    <>
      <Navbar />
      <h1 className="page-title">Movies</h1>
      <MovieCarousel title="Popular Movies" items={movies1} />
      <MovieCarousel title="Top Rated" items={movies2} />
      <MovieCarousel title="Trending Now" items={movies3} />
      <MovieCarousel title="New Releases" items={movies4} />
      <MovieCarousel title="Action Movies" items={movies5} />
      <Footer />
    </>
  );
};

export default Movies;
