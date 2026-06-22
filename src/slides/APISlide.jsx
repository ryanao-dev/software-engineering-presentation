import { useState, useEffect } from 'react'
import './APISlide_new.css'

function APISlide() {
  const [showMessenger, setShowMessenger] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowMessenger(true), 1000)
  }, [])

  return (
    <div className="slide api-slide">
      <h2>Layer 2: The API 📡</h2>
      <p className="simple-text">It's how your app TALKS to the server over HTTP/HTTPS</p>
      
      <div className="api-visual">
        <div className="endpoint phone-side">
          <div className="endpoint-icon">📱</div>
          <p>Your Device</p>
          <div className="speech-bubble">
            POST /api/photos<br/>
            {`{data: image.jpg}`}
          </div>
        </div>

        {showMessenger && (
          <div className="messenger">
            <div className="messenger-icon">🌐</div>
            <div className="messenger-label">HTTP Request</div>
            <div className="messenger-package">JSON Data 📦</div>
          </div>
        )}

        <div className="endpoint server-side">
          <div className="endpoint-icon">🖥️</div>
          <p>Server (Cloud)</p>
          <div className="speech-bubble">
            200 OK<br/>
            {`{status: "saved"}`}
          </div>
        </div>
      </div>

      <div className="api-info">
        <p>🔹 REST APIs use endpoints like /api/users, /api/posts</p>
        <p>🔹 Data sent as JSON (JavaScript Object Notation)</p>
        <p>🔹 Companies like Meta have APIs handling billions of requests/day</p>
      </div>
    </div>
  )
}

export default APISlide
