import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const movies = [
  "Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5",
  "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"
];

const series = [
  "Series 1", "Series 2", "Series 3", "Series 4", "Series 5",
  "Series 6", "Series 7", "Series 8", "Series 9", "Series 10"
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="spacer"></div> {/* ✅ Adds extra space before scrolling */}
      <MovieCarousel title="Movies" items={movies} />
      <MovieCarousel title="Series" items={series} />
      <MovieCarousel title="Movies" items={movies} />
      <MovieCarousel title="Series" items={series} />
      <Footer />
    </>
  );
};

export default Home;
