import { useState, useEffect } from 'react'
import './JourneySlide_new.css'

function JourneySlide() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 5 ? prev + 1 : prev))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slide journey-slide">
      <h2>The Complete Journey 🌐</h2>
      <p className="journey-subtitle">A real Instagram post - what actually happens...</p>
      
      <div className="journey-flow">
        <div className={`journey-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-icon">📱</div>
          <div className="step-content">
            <h3>1. Client-Side (Your Phone)</h3>
            <p>React/Swift app captures photo, creates JSON payload</p>
          </div>
        </div>

        {step >= 1 && <div className="connector">↓ HTTPS ↓</div>}

        <div className={`journey-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-icon">🌐</div>
          <div className="step-content">
            <h3>2. API Gateway</h3>
            <p>AWS/Google Cloud routes request to correct server</p>
          </div>
        </div>

        {step >= 2 && <div className="connector">↓</div>}

        <div className={`journey-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-icon">🖥️</div>
          <div className="step-content">
            <h3>3. Backend Server</h3>
            <p>Node.js/Python validates data, processes image</p>
          </div>
        </div>

        {step >= 3 && <div className="connector">↓</div>}

        <div className={`journey-step ${step >= 4 ? 'active' : ''}`}>
          <div className="step-icon">📦</div>
          <div className="step-content">
            <h3>4. Cloud Storage</h3>
            <p>AWS S3 stores the actual image file</p>
          </div>
        </div>

        {step >= 4 && <div className="connector">↓</div>}

        <div className={`journey-step ${step >= 5 ? 'active' : ''}`}>
          <div className="step-icon">💾</div>
          <div className="step-content">
            <h3>5. Database Write</h3>
            <p>PostgreSQL saves: user_id, image_url, timestamp, caption</p>
          </div>
        </div>
      </div>

      {step >= 5 && (
        <div className="success-message">
          <span className="success-icon">✅</span>
          <p>Posted! Now replicated across multiple data centers worldwide 🌍</p>
        </div>
      )}
    </div>
  )
}

export default JourneySlide
