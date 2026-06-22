import { useState } from 'react'
import './FeatureWorksheetSlide.css'

function FeatureWorksheetSlide() {
  const [userRole, setUserRole] = useState('')
  const [situation, setSituation] = useState('')
  const [action, setAction] = useState('')
  const [outcome, setOutcome] = useState('')
  const [prompt, setPrompt] = useState('')
  const [tests, setTests] = useState('')

  return (
    <div className="slide worksheet-slide">
      <h2>Plan Your Feature 📝</h2>

      <div className="worksheet-grid">
        <div className="worksheet-section">
          <h3>User Story</h3>
          <div className="story-builder">
            <div className="story-row">
              <span className="story-label">As a</span>
              <input placeholder="student / canteen manager..." value={userRole} onChange={e => setUserRole(e.target.value)} />
            </div>
            <div className="story-row">
              <span className="story-label">when</span>
              <input placeholder="I'm browsing the menu..." value={situation} onChange={e => setSituation(e.target.value)} />
            </div>
            <div className="story-row">
              <span className="story-label">I want to</span>
              <input placeholder="see which items are popular..." value={action} onChange={e => setAction(e.target.value)} />
            </div>
            <div className="story-row">
              <span className="story-label">so that</span>
              <input placeholder="I can make a quicker decision..." value={outcome} onChange={e => setOutcome(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="worksheet-right">
          <div className="worksheet-section">
            <h3>Kiro Prompt</h3>
            <textarea
              placeholder="Describe the feature you want to build in plain English..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              rows={3}
            />
          </div>

          <div className="worksheet-section">
            <h3>How Will You Test It?</h3>
            <textarea
              placeholder="e.g. Check that the badge appears on the correct items. Check it doesn't show on items with no orders..."
              value={tests}
              onChange={e => setTests(e.target.value)}
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureWorksheetSlide
