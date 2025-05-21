// Slider.jsx
import React, { useState } from 'react';

const slides = [
  { id: 1, content: 'Slide 1: Welcome to the Slider!' },
  { id: 2, content: 'Slide 2: React is awesome!' },
  { id: 3, content: 'Slide 3: You can customize me!' },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={styles.container}>
      <button onClick={goToPrevious} style={styles.button}>←</button>
      <div style={styles.slide}>{slides[currentIndex].content}</div>
      <button onClick={goToNext} style={styles.button}>→</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '20px auto',
    fontSize: '20px',
    backgroundColor: '#f9f9f9',
  },
  slide: {
    minWidth: '300px',
    textAlign: 'center',
  },
  button: {
    fontSize: '24px',
    cursor: 'pointer',
  },
};
