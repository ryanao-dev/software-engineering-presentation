import './TechRolesSlide.css'

function TechRolesSlide() {
  const roles = [
    { emoji: '👩‍💻', title: 'Software Engineer', desc: 'Builds the features users interact with — frontend, backend, or both' },
    { emoji: '🏗️', title: 'Architect', desc: 'Designs the overall structure of a system — how all the pieces fit together at scale' },
    { emoji: '🔒', title: 'Security Engineer', desc: 'Protects the system from attacks, data breaches, and vulnerabilities' },
    { emoji: '🧪', title: 'QA Engineer', desc: 'Tests the software to find bugs before real users do' },
    { emoji: '☁️', title: 'DevOps / Cloud', desc: 'Keeps the app running reliably — deployments, servers, and infrastructure' },
    { emoji: '🎨', title: 'UX Designer', desc: 'Designs how the app looks and feels — making it intuitive and enjoyable to use' },
  ]

  return (
    <div className="slide tech-roles-slide">
      <h2>The Team Behind an App 👥</h2>
      <p className="roles-intro">Software engineering is a team sport — many different roles work together</p>

      <div className="roles-grid">
        {roles.map((role, i) => (
          <div className="role-item" key={i}>
            <span className="role-item-emoji">{role.emoji}</span>
            <div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechRolesSlide
