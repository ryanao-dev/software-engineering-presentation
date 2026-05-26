import './AIAgentSlide.css'

function AIAgentSlide() {
  return (
    <div className="slide ai-agent-slide">
      <h2>Your AI Coding Assistant 🤖</h2>
      <p className="ai-intro">Professional developers use AI tools every day. Today, so will you.</p>

      <div className="ai-tool">
        <div className="ai-tool-header">
          <span className="ai-logo">⚡</span>
          <div>
            <h3>Kiro</h3>
            <p className="ai-tagline">An AI agent that understands your codebase and helps you build</p>
          </div>
        </div>
      </div>

      <div className="ai-capabilities">
        <div className="ai-cap">
          <span>🔍</span>
          <p>Reads and understands existing code</p>
        </div>
        <div className="ai-cap">
          <span>🐛</span>
          <p>Helps you find and fix bugs</p>
        </div>
        <div className="ai-cap">
          <span>✍️</span>
          <p>Writes new code based on your instructions</p>
        </div>
        <div className="ai-cap">
          <span>💬</span>
          <p>Explains what code does in plain English</p>
        </div>
      </div>

      <div className="ai-note">
        <p>💡 <strong>The skill isn't just writing code — it's knowing what to ask for.</strong> You're the engineer. Kiro is your tool.</p>
      </div>
    </div>
  )
}

export default AIAgentSlide
