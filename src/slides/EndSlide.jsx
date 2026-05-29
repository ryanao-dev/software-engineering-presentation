import './EndSlide_new.css'

function EndSlide() {
  return (
    <div className="slide end-slide">
      <h1 className="end-title">You're Now a Tech Expert! 🎓</h1>
      
      <div className="recap-grid">
        <div className="recap-card">
          <span className="recap-emoji">🎨</span>
          <h3>UI</h3>
          <p>What you see & touch</p>
        </div>
        
        <div className="recap-card">
          <span className="recap-emoji">🚴</span>
          <h3>API</h3>
          <p>The messenger</p>
        </div>
        
        <div className="recap-card">
          <span className="recap-emoji">💾</span>
          <h3>Database</h3>
          <p>The vault</p>
        </div>
      </div>

      <div className="final-message">
        <p className="big-final">Every app follows this architecture:</p>
        <p className="apps-list">Instagram • Discord • Spotify • Netflix • Your favorite game</p>
        <p className="cta">You could build the next viral app 🚀</p>
      </div>

      <div className="tech-stack">
        <p className="tech-title">Technologies you learned about:</p>
        <div className="tech-badges">
          <span className="badge">HTML/CSS</span>
          <span className="badge">JavaScript</span>
          <span className="badge">React</span>
          <span className="badge">APIs</span>
          <span className="badge">Databases</span>
          <span className="badge">Servers</span>
        </div>
      </div>
    </div>
  )
}

export default EndSlide
