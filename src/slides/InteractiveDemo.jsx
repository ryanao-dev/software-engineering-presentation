import { useState } from 'react'
import './InteractiveDemo_new.css'

function InteractiveDemo() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSubmit = () => {
    if (username && message) {
      setLoading(true)
      setSubmitted(true)
      
      setTimeout(() => {
        setLoading(false)
        setSaved(true)
      }, 2000)
    }
  }

  const reset = () => {
    setUsername('')
    setMessage('')
    setSubmitted(false)
    setLoading(false)
    setSaved(false)
  }

  return (
    <div className="slide interactive-demo-slide">
      <h2>Let's Try It! 🎮</h2>
      <p className="demo-instruction">Post a message and watch the journey!</p>
      
      <div className="demo-container">
        <div className="demo-app">
          <div className="app-title">Demo App 📱</div>
          
          {!submitted ? (
            <div className="input-form">
              <input
                type="text"
                placeholder="Your name..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="demo-input"
              />
              <textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="demo-textarea"
              />
              <button 
                onClick={handleSubmit}
                className="submit-button"
                disabled={!username || !message}
              >
                Post Message 🚀
              </button>
            </div>
          ) : (
            <div className="journey-visualization">
              <div className="viz-step ui-step active">
                <span className="viz-icon">📱</span>
                <span>UI: Data collected!</span>
              </div>
              
              {submitted && (
                <div className={`viz-step api-step ${loading ? 'active' : ''}`}>
                  <span className="viz-icon">🚴</span>
                  <span>API: Sending...</span>
                  {loading && <div className="spinner"></div>}
                </div>
              )}
              
              {saved && (
                <div className="viz-step db-step active">
                  <span className="viz-icon">💾</span>
                  <span>Database: Saved! ✅</span>
                </div>
              )}
              
              {saved && (
                <div className="saved-data">
                  <h3>Your message is now in the database! 🎉</h3>
                  <div className="data-display">
                    <p><strong>User:</strong> {username}</p>
                    <p><strong>Message:</strong> {message}</p>
                    <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
                  </div>
                  <button onClick={reset} className="reset-button">
                    Try Again 🔄
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InteractiveDemo
