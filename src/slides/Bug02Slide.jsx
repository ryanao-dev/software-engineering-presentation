import './TicketSlide.css'

function Bug02Slide() {
  return (
    <div className="slide ticket-slide">
      <div className="ticket-header">
        <span className="ticket-tag bug">🐛 BUG</span>
        <span className="ticket-id">BUG-02</span>
      </div>

      <h2>Pickup time has no validation</h2>

      <div className="ticket-body">
        <div className="ticket-section">
          <h3>📋 Description</h3>
          <p>The pickup time selector lets users choose any date and time — including times in the past or days in the future. Orders should only be placeable up to 2 hours ahead.</p>
        </div>

        <div className="ticket-columns">
          <div className="ticket-section">
            <h3>✅ Expected</h3>
            <p>Users can only select a pickup time within the next 2 hours — invalid times are not available</p>
          </div>

          <div className="ticket-section">
            <h3>❌ Actual</h3>
            <p>Any date and time can be selected with no validation — past, present, or far future</p>
          </div>
        </div>

        <div className="ticket-hint">
          <span className="hint-icon">💡</span>
          <p><strong>Hint:</strong> Look at the <code>TimeSlotPicker</code> component — can you think of a better approach that limits what the user can select?</p>
        </div>
      </div>
    </div>
  )
}

export default Bug02Slide
