import './FeatureChallengeSlide.css'

function FeatureChallengeSlide() {
  return (
    <div className="slide feature-challenge-slide">
      <div className="challenge-badge">🚀 Final Challenge</div>
      <h2>Build Something New</h2>
      <p className="challenge-intro">You've fixed the bugs. Now it's time to build.</p>

      <div className="challenge-brief">
        <p>The canteen team has given you <strong>one open brief</strong>:</p>
        <p className="brief-quote">"Improve the student experience — however you think is best."</p>
      </div>

      <div className="challenge-roles">
        <div className="role-card">
          <span className="role-emoji">🎨</span>
          <h3>Think like a UX Designer</h3>
          <p>What would make this app better to use? What's missing?</p>
        </div>
        <div className="role-card">
          <span className="role-emoji">👩‍💻</span>
          <h3>Think like an Engineer</h3>
          <p>How will you build it? What code needs to change?</p>
        </div>
        <div className="role-card">
          <span className="role-emoji">🧪</span>
          <h3>Think like a QA</h3>
          <p>How will you know it works? What could go wrong?</p>
        </div>
      </div>

      <p className="challenge-cta">No right answer — this is your feature 💡</p>
    </div>
  )
}

export default FeatureChallengeSlide
