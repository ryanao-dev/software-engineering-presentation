import './ScenarioSlide.css'

function ScenarioSlide() {
  return (
    <div className="slide scenario-slide">
      <h2>Your Mission 🎯</h2>
      <p className="scenario-intro">You're a software engineer at a tech company.</p>
      <p className="scenario-intro">You've just joined the team working on a <strong>school canteen ordering app</strong> — and it's your first week.</p>

      <div className="scenario-cards">
        <div className="scenario-card">
          <span className="scenario-emoji">🍽️</span>
          <h3>The App</h3>
          <p>Students browse the menu, customise their order, and pick a collection time — all from their phone</p>
        </div>
        <div className="scenario-card">
          <span className="scenario-emoji">👩‍💻</span>
          <h3>Your Role</h3>
          <p>You're working on the student-facing side of the app — the part students see and interact with every day</p>
        </div>
        <div className="scenario-card">
          <span className="scenario-emoji">📋</span>
          <h3>The Work</h3>
          <p>Your first tasks: fix bugs that have been reported, and build a new feature the team has been asked to deliver</p>
        </div>
      </div>

      <p className="scenario-cta">Let's take a look at the app 👇</p>
    </div>
  )
}

export default ScenarioSlide
