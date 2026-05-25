import { useState, useEffect } from 'react'
import './ReverseJourney_new.css'

function ReverseJourney() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slide reverse-journey-slide">
      <h2>Loading Your Feed (Reverse Journey) ⬅️</h2>
      <p className="journey-subtitle">What happens when you open Instagram?</p>
      
      <div className="reverse-flow">
        <div className={`reverse-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-icon">📱</div>
          <div className="step-content">
            <h3>1. App Loads</h3>
            <p>GET request to /api/feed?user_id=you</p>
          </div>
        </div>

        {step >= 1 && <div className="connector">→</div>}

        <div className={`reverse-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-icon">💾</div>
          <div className="step-content">
            <h3>2. Database Query</h3>
            <p>SELECT posts FROM users WHERE following...</p>
          </div>
        </div>

        {step >= 2 && <div className="connector">→</div>}

        <div className={`reverse-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-icon">🖥️</div>
          <div className="step-content">
            <h3>3. Server Processes</h3>
            <p>Formats data as JSON array of posts</p>
          </div>
        </div>

        {step >= 3 && <div className="connector">→</div>}

        <div className={`reverse-step ${step >= 4 ? 'active' : ''}`}>
          <div className="step-icon">📱</div>
          <div className="step-content">
            <h3>4. UI Renders</h3>
            <p>React maps over posts array, displays images</p>
          </div>
        </div>
      </div>

      {step >= 4 && (
        <div className="timing-info">
          <p className="timing-text">⚡ All of this happens in under 500ms</p>
          <p className="scale-text">Instagram does this ~1 billion times per day</p>
        </div>
      )}
    </div>
  )
}

export default ReverseJourney
