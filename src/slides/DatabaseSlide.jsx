import { useState, useEffect } from 'react'
import './DatabaseSlide.css'

function DatabaseSlide() {
  const [showData, setShowData] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowData(true), 800)
  }, [])

  return (
    <div className="slide database-slide">
      <h2>Layer 3: The Database 💾</h2>
      <p className="db-intro">Permanent storage - PostgreSQL, MongoDB, MySQL</p>
      
      <div className="content-row">
        <div className="database-visual">
          <div className="vault-simple">
            <div className="vault-icon">🗄️</div>
            <div className="data-tables">
              <div className="table-item">👤 Users</div>
              <div className="table-item">📸 Posts</div>
              <div className="table-item">💬 Comments</div>
              <div className="table-item">❤️ Likes</div>
            </div>
          </div>
        </div>

        <div className="db-facts">
          <div className="fact">
            <span className="fact-icon">⚡</span>
            <p>Instant search across millions of records</p>
          </div>
          <div className="fact">
            <span className="fact-icon">🔗</span>
            <p>Tables linked with foreign keys</p>
          </div>
          <div className="fact">
            <span className="fact-icon">🔐</span>
            <p>Encrypted & replicated globally</p>
          </div>
        </div>
      </div>

      <div className="db-example" style={{display:'none'}}></div>
    </div>
  )
}

export default DatabaseSlide
