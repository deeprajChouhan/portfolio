import { useState } from 'react'

const FeedbackSection = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('feature')
  const [feedback, setFeedback] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const token = import.meta.env.VITE_BASEROW_TOKEN
      const typeOption = type === 'bug' ? 'Bug' : 'Feedback'

      const rowRes = await fetch('https://api.baserow.io/api/database/rows/table/668961/?user_field_names=true', {
        method: 'POST',
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name: name, Type: typeOption, Feedback: feedback })
      })
      if (!rowRes.ok) throw new Error('Failed to submit feedback')
      setStatus({ ok: true, message: 'Thanks for your feedback!', feedback })
      setName('')
      setType('feature')
      setFeedback('')
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-5 text-center">
              <h2 className="section-title title-center">Share Your <span>Thoughts</span></h2>
              <p className="mb-4">Your voice helps shape this project. Tell us what you love and what we can do better.</p>
            </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="feedback-name">Your full name</label>
                    <input
                      id="feedback-name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-type">Type</label>
                    <select
                      id="feedback-type"
                      name="type"
                      value={type}
                      onChange={e => setType(e.target.value)}
                      required
                    >
                      <option value="feature">Feature</option>
                      <option value="bug">Bug</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-message">Write your feedback</label>
                    <textarea
                      id="feedback-message"
                      name="feedback"
                      value={feedback}
                      onChange={e => setFeedback(e.target.value)}
                      placeholder="Let us know how we can improve..."
                      required
                    ></textarea>
                  </div>
                  <button className="def-btn w-100" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Feedback'}
                  </button>
                  {status && status.ok && (
                    <div className="alert alert-success text-center mt-3">
                      <p className="mb-1">{status.message}</p>
                      <blockquote className="mb-0">{status.feedback}</blockquote>
                    </div>
                  )}
                  {status && status.ok === false && (
                    <div className="alert alert-danger text-center mt-3">{status.message}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FeedbackSection
