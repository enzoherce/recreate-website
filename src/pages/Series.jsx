import Navbar from "../components/Navbar";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const series1 = ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5", "Series 6", "Series 7", "Series 8", "Series 9", "Series 10"];
const series2 = [...series1];
const series3 = [...series1];
const series4 = [...series1];
const series5 = [...series1];

const Series = () => {
  return (
    <>
      <Navbar />
      <h1 className="page-title">TV Series</h1>
      <MovieCarousel title="Popular Series" items={series1} />
      <MovieCarousel title="Top Rated" items={series2} />
      <MovieCarousel title="Trending Now" items={series3} />
      <MovieCarousel title="New Releases" items={series4} />
      <MovieCarousel title="Drama Series" items={series5} />
      <Footer />
    </>
  );
};

export default Series;
