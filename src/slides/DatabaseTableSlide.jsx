import './DatabaseTableSlide.css'

function DatabaseTableSlide() {
  const rows = [
    { id: 1, email: 'alex@school.com', username: 'alex_j', profile_pic: '🧑', created_at: '2024-09-01' },
    { id: 2, email: 'priya@school.com', username: 'priya_k', profile_pic: '👩', created_at: '2024-09-02' },
    { id: 3, email: 'marcus@school.com', username: 'marcus_t', profile_pic: '👦', created_at: '2024-09-03' },
  ]

  return (
    <div className="slide db-table-slide">
      <h2>What a Database Table Looks Like 💾</h2>
      <p className="db-table-intro">Every user in the app is a row in the <code>users</code> table</p>

      <div className="table-wrapper">
        <table className="db-table">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>username</th>
              <th>profile_pic</th>
              <th>created_at</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td className="id-col">{row.id}</td>
                <td>{row.email}</td>
                <td>{row.username}</td>
                <td className="emoji-col">{row.profile_pic}</td>
                <td className="date-col">{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="db-table-notes">
        <div className="db-note">
          <span>🔑</span>
          <p><strong>id</strong> — unique number for every row, never repeated</p>
        </div>
        <div className="db-note">
          <span>🔐</span>
          <p><strong>passwords</strong> are never stored as plain text — always encrypted</p>
        </div>
        <div className="db-note">
          <span>🔗</span>
          <p>Other tables (posts, likes) reference this <strong>id</strong> to link data together</p>
        </div>
      </div>
    </div>
  )
}

export default DatabaseTableSlide
