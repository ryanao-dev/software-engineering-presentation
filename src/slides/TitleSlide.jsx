import './TitleSlide_new.css'

function TitleSlide() {
  return (
    <div className="slide title-slide">
      <h1 className="glowing-title">⚡ How Apps Really Work ⚡</h1>
      <p className="subtitle">The Tech Behind Instagram, Discord, Netflix & More</p>
      <div className="app-icons">
        <span className="icon">📱</span>
        <span className="icon">💻</span>
        <span className="icon">🌐</span>
      </div>
      <p className="hint">Press → or Space to continue</p>
    </div>
  )
}

export default TitleSlide
