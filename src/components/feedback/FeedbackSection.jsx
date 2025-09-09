import { useState } from 'react'

const FeedbackSection = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('feature')
  const [feedback, setFeedback] = useState('')
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setStatusType('')
    setIsSubmitting(true)
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
      setStatus('Thanks for your feedback!')
      setStatusType('success')
      setName('')
      setType('feature')
      setFeedback('')
    } catch (err) {
      setStatus(err.message)
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
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
              <button className="def-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
              {status && (
                <p
                  className="mt-3"
                  style={
                    statusType === 'success'
                      ? {
                          background: 'linear-gradient(135deg, #CB26B6, #F8B127)',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent'
                        }
                      : { color: '#dc3545' }
                  }
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
