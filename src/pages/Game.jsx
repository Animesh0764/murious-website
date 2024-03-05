import React, { useState, useEffect } from "react";
import "../../public/css/Game.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import imageData from "../data/puzzle.json"; // Import your JSON file

const Game = () => {
  const { width, height } = useWindowSize();
  const [isSolved, setIsSolved] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Extract image URLs from the JSON
    const imageUrls = imageData.puzzle.map(item => item.imageUrl);
    // Shuffle the array of image URLs
    const shuffled = [...imageUrls].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const handleSolved = () => {
    setIsSolved(true);
  };

  return (
    <div className="puzzle-page">
      <JigsawPuzzle
        imageSrc={shuffledImages[0]} // Use the first shuffled image
        rows={3}
        columns={3}
        onSolved={handleSolved}
      />
      <img src={shuffledImages[0]} alt="puzzle" className="puzzle-image" />

      {isSolved && <Confetti width={width} height={height} />}
    </div>
  );
};

export default Game;
