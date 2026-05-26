import './ScenarioSlide.css'

function ScenarioSlide() {
  return (
    <div className="slide scenario-slide">
      <h2>Your Mission 🎯</h2>
      <p className="scenario-intro">You're a software engineer at a tech company.</p>
      <p className="scenario-intro">Your team has been asked to build a <strong>school canteen ordering app</strong>.</p>

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
          <p>Real tasks: fixing bugs reported by users, and building new features requested by the canteen team</p>
        </div>
      </div>

      <p className="scenario-cta">Let's take a look at the app 👇</p>
    </div>
  )
}

export default ScenarioSlide
