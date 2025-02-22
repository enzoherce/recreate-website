import { useState } from "react";
import "../styles/MovieCarousel.css";

const MovieCarousel = ({ title, items }) => {
  const [startIndex, setStartIndex] = useState(0);

  const getItemsToShow = () => {
    let extendedItems = [...items, ...items];
    return extendedItems.slice(startIndex, startIndex + 5);
  };

  const nextItem = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        <button className="carousel-btn" onClick={prevItem}>⬅</button>
        <div className="carousel-container">
          {getItemsToShow().map((item, index) => (
            <div key={index} className="carousel-item">{item}</div>
          ))}
        </div>
        <button className="carousel-btn" onClick={nextItem}>➡</button>
      </div>
    </div>
  );
};

export default MovieCarousel;
