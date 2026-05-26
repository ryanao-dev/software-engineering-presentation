import './TicketSlide.css'

function Bug01Slide() {
  return (
    <div className="slide ticket-slide">
      <div className="ticket-header">
        <span className="ticket-tag bug">🐛 BUG</span>
        <span className="ticket-id">BUG-01</span>
      </div>

      <h2>Wrong page shown after placing an order</h2>

      <div className="ticket-body">
        <div className="ticket-section">
          <h3>📋 Description</h3>
          <p>After placing an order, the app takes the user to the wrong screen — an empty cart — instead of the order tracking screen.</p>
        </div>

        <div className="ticket-columns">
          <div className="ticket-section">
            <h3>✅ Expected</h3>
            <p>User sees the order tracking screen showing their order status</p>
            <div className="status-flow">
              <span className="status-badge">Confirmed</span>
              <span className="flow-arrow">→</span>
              <span className="status-badge">Preparing</span>
              <span className="flow-arrow">→</span>
              <span className="status-badge">Ready</span>
            </div>
          </div>

          <div className="ticket-section">
            <h3>❌ Actual</h3>
            <p>User is taken to an empty cart screen — as if the order never happened</p>
          </div>
        </div>

        <div className="ticket-hint">
          <span className="hint-icon">💡</span>
          <p><strong>Hint:</strong> Look at what happens in <code>App.tsx</code> after an order is successfully placed</p>
        </div>
      </div>
    </div>
  )
}

export default Bug01Slide
