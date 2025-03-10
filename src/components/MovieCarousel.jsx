import { useState, useEffect } from "react";
import "../styles/MovieCarousel.css";

const MovieCarousel = ({ title, items }) => {
  const visibleItems = 5;
  const totalItems = 10;
  const extendedItems = [...items, ...items]; 
  const [startIndex, setStartIndex] = useState(totalItems); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const nextItem = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const prevItem = () => {
    setIsTransitioning(true);
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (startIndex >= extendedItems.length - visibleItems) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(totalItems);
      }, 400);
    }
    if (startIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(totalItems * 2 - visibleItems);
      }, 400);
    }
  }, [startIndex, extendedItems.length, totalItems, visibleItems]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        <button className="carousel-btn left-btn" onClick={prevItem}>⬅</button>
        <div className="carousel-container">
          <div
            className={`carousel-track ${isTransitioning ? "smooth" : "no-transition"}`}
            style={{ transform: `translateX(-${startIndex * (100 / visibleItems)}%)` }}
          >
            {extendedItems.map((movie, index) => (
              <div key={index} className="carousel-item" onClick={() => handleMovieClick(movie)}>
                <img 
                  src={movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` 
                    : "https://via.placeholder.com/100"} 
                  alt={movie.title || movie.name} 
                />
                <p>{movie.title || movie.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn right-btn" onClick={nextItem}>➡</button>
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>
            <div className="modal-inner">
              <img 
                className="modal-image"
                src={selectedMovie.poster_path 
                  ? `https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}` 
                  : "https://via.placeholder.com/150"} 
                alt={selectedMovie.title || selectedMovie.name} 
              />
              <div className="modal-info">
                <h2>{selectedMovie.title || selectedMovie.name}</h2>
                <p>{selectedMovie.overview || "No description available."}</p>
                <button className="watch-now-btn">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCarousel;
