import { useState, useEffect } from 'react'
import './UISlide.css'

function UISlide() {
  const [showElements, setShowElements] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowElements(true), 500)
  }, [])

  return (
    <div className="slide ui-slide">
      <h2>Layer 1: The Frontend (What You See) 🎨</h2>
      <p>HTML, CSS & JavaScript - runs on your device</p>
      
      <div className="phone-mockup">
        <div className="phone-screen">
          <div className="app-header">Instagram Clone</div>
          {showElements && (
            <>
              <div className="ui-element button-elem">
                <span className="emoji-icon">👆</span>
                <span>Buttons</span>
              </div>
              <div className="ui-element input-elem">
                <span className="emoji-icon">⌨️</span>
                <span>Forms</span>
              </div>
              <div className="ui-element image-elem">
                <span className="emoji-icon">🖼️</span>
                <span>Images</span>
              </div>
              <div className="ui-element icon-elem">
                <span className="emoji-icon">⚛️</span>
                <span>Components</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <p className="ui-description">Built with React, Vue, Swift (iOS) or Kotlin (Android)</p>
    </div>
  )
}

export default UISlide
