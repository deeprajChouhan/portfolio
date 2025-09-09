import { useState } from 'react'

const FeedbackSection = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('feature')
  const [feedback, setFeedback] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const email = import.meta.env.VITE_BASEROW_EMAIL
      const password = import.meta.env.VITE_BASEROW_PASSWORD

      const authRes = await fetch('https://api.baserow.io/api/user/token-auth/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const authData = await authRes.json()
      if (!authRes.ok) throw new Error(authData.detail || 'Authentication failed')
      const token = authData.token

      const dbRes = await fetch('https://api.baserow.io/api/database/databases/', {
        headers: { Authorization: `Token ${token}` }
      })
      const dbData = await dbRes.json()
      const db = dbData.results.find(d => d.name === 'portfolio')
      if (!db) throw new Error('Database not found')

      const tableRes = await fetch(`https://api.baserow.io/api/database/tables/database/${db.id}/`, {
        headers: { Authorization: `Token ${token}` }
      })
      const tableData = await tableRes.json()
      const table = tableData.results.find(t => t.name === 'feedback')
      if (!table) throw new Error('Table not found')

      const rowRes = await fetch(`https://api.baserow.io/api/database/rows/table/${table.id}/?user_field_names=true`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name: name, Type: type, Feedback: feedback })
      })
      if (!rowRes.ok) throw new Error('Failed to submit feedback')
      setStatus('Thanks for your feedback!')
      setName('')
      setType('feature')
      setFeedback('')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <div className="contact-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-5">
            <h2 className="section-title title-center">send <span>feedback</span></h2>
          </div>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your full name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select value={type} onChange={e => setType(e.target.value)} required>
                  <option value="feature">Feature</option>
                  <option value="bug">Bug</option>
                </select>
              </div>
              <div className="form-group">
                <label>Write your feedback</label>
                <textarea value={feedback} onChange={e => setFeedback(e.target.value)} required></textarea>
              </div>
              <button className="def-btn" type="submit">Submit Feedback</button>
              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
