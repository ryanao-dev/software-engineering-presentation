import './BugsSlide.css'

function BugsSlide() {
  return (
    <div className="slide bugs-slide">
      <h2>What is a Bug? 🐛</h2>
      <p className="bugs-intro">A bug is when software doesn't behave the way it's supposed to.</p>

      <div className="bugs-grid">
        <div className="bug-type">
          <span className="bug-emoji">🔀</span>
          <h3>Logic Bug</h3>
          <p>The code runs fine but does the wrong thing — like navigating to the wrong page after an action</p>
        </div>
        <div className="bug-type">
          <span className="bug-emoji">✅</span>
          <h3>Validation Bug</h3>
          <p>The app accepts input it shouldn't — like letting a user book a pickup time in the past</p>
        </div>
        <div className="bug-type">
          <span className="bug-emoji">💥</span>
          <h3>Crash Bug</h3>
          <p>Something breaks entirely — an error appears or the app stops working</p>
        </div>
      </div>

      <div className="bugs-why">
        <p className="bugs-why-title">Why do bugs happen?</p>
        <div className="bugs-reasons">
          <span className="reason-tag">Typos in code</span>
          <span className="reason-tag">Wrong assumptions</span>
          <span className="reason-tag">Copy-paste mistakes</span>
          <span className="reason-tag">Missed edge cases</span>
          <span className="reason-tag">Rushed changes</span>
        </div>
      </div>

      <p className="bugs-cta">Finding and fixing bugs is a core part of every developer's job 🔍</p>
    </div>
  )
}

export default BugsSlide
