import './FeatureWorksheetSlide.css'

function FeatureWorksheetSlide() {
  return (
    <div className="slide worksheet-slide">
      <div className="worksheet-items">
        <div className="worksheet-item">
          <span className="worksheet-num">1</span>
          <div>
            <h3>Write a User Story</h3>
            <p className="worksheet-example">As a <em>[user]</em>, when <em>[situation]</em>, I want to <em>[action]</em>, so that <em>[outcome]</em></p>
          </div>
        </div>

        <div className="worksheet-item">
          <span className="worksheet-num">2</span>
          <div>
            <h3>Write Your Kiro Prompt</h3>
            <p>Describe the feature you want to build in plain English — be specific about what should change and where</p>
          </div>
        </div>

        <div className="worksheet-item">
          <span className="worksheet-num">3</span>
          <div>
            <h3>Define Your Tests</h3>
            <p>How will you know it works? Write down what you'll check — think about what should happen and what shouldn't</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureWorksheetSlide
