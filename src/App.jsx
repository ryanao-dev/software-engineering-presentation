import { useState } from 'react'
import './App.css'
import TitleSlide from './slides/TitleSlide'
import IntroSlide from './slides/IntroSlide'
import UISlide from './slides/UISlide'
import InteractionSlide from './slides/InteractionSlide'
import APISlide from './slides/APISlide'
import DatabaseSlide from './slides/DatabaseSlide'
import JourneySlide from './slides/JourneySlide'
import ReverseJourney from './slides/ReverseJourney'
import InteractiveDemo from './slides/InteractiveDemo'
import EndSlide from './slides/EndSlide'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <TitleSlide />,
    <IntroSlide />,
    <UISlide />,
    <InteractionSlide />,
    <APISlide />,
    <DatabaseSlide />,
    <JourneySlide />,
    <ReverseJourney />,
    <InteractiveDemo />,
    <EndSlide />
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      nextSlide()
    } else if (e.key === 'ArrowLeft') {
      prevSlide()
    }
  }

  return (
    <div className="presentation" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="slide-container">
        {slides[currentSlide]}
      </div>
      
      <div className="controls">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Previous
        </button>
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default App
