import { useState } from 'react'
import './InteractionSlide_new.css'

function InteractionSlide() {
  const [likes, setLikes] = useState(0)
  const [showCode, setShowCode] = useState(false)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="slide interaction-slide">
      <h2>Events: Making Apps Interactive 💫</h2>
      <p className="subtitle-text">Apps respond to your actions in real-time</p>
      
      <div className="interaction-demo">
        <div className="demo-box-new">
          <h3>Try it yourself:</h3>
          
          <div className="like-demo">
            <button className="like-button" onClick={handleLike}>
              ❤️ Like
            </button>
            <div className="like-count">{likes} {likes === 1 ? 'like' : 'likes'}</div>
          </div>

          <button 
            className="toggle-code-btn"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? '👁️ Hide' : '👁️ Show'} the code
          </button>

          {showCode && (
            <div className="code-reveal">
              <div className="code-header">How it works:</div>
              <pre className="code-block">
{`// When you click the button...
<button onClick={handleLike}>
  ❤️ Like
</button>

// This function runs:
function handleLike() {
  setLikes(likes + 1)  // Update the count
}

// React automatically re-renders
// the UI with the new number!`}
              </pre>
            </div>
          )}
        </div>

        <div className="explanation-cards">
          <div className="exp-card">
            <div className="exp-icon">👆</div>
            <h4>User Action</h4>
            <p>Click, tap, type, scroll</p>
          </div>
          <div className="exp-arrow">→</div>
          <div className="exp-card">
            <div className="exp-icon">⚡</div>
            <h4>Event Fires</h4>
            <p>onClick, onChange, onSubmit</p>
          </div>
          <div className="exp-arrow">→</div>
          <div className="exp-card">
            <div className="exp-icon">🔄</div>
            <h4>State Updates</h4>
            <p>Variables change, UI re-renders</p>
          </div>
        </div>
      </div>
      
      <p className="interaction-text">
        <strong>Event-driven programming</strong> - code that waits and reacts to what you do!
      </p>
    </div>
  )
}

export default InteractionSlide
