import './IntroSlide_new.css'

function IntroSlide() {
  return (
    <div className="slide intro-slide">
      <h2>Ever Wonder What Happens Behind the Scenes? 🤔</h2>
      <div className="question-box">
        <p className="big-text">You post a story on Instagram at 3pm</p>
        <p className="big-text">Your friend in another country sees it instantly</p>
        <p className="big-text">How? 📸</p>
        <div className="tech-hint">
          <p>Millions of lines of code working together</p>
          <p>Data traveling at the speed of light</p>
          <p>Systems handling billions of users simultaneously</p>
        </div>
      </div>
      <p className="emphasis">Let's break it down 🎯</p>
    </div>
  )
}

export default IntroSlide
