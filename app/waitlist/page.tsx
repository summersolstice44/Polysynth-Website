'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.name || !formData.email) {
      setError('Please fill in all required fields.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    // Here you would typically send the data to your backend/API
    // For now, we'll just show a success message
    console.log('Waitlist submission:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h1>Thank You!</h1>
            <p>You've been added to our waitlist. We'll notify you as soon as the poly1-mini becomes available.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Join the Waitlist</h1>
            <p className={styles.subtitle}>
              Be among the first to experience the future of multi-material 3D printing
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.error}>{error}</div>}
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="useCase">Intended Use Case (Optional)</label>
                <textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us how you plan to use the poly1-mini..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Join Waitlist
              </button>
            </form>

            <div className={styles.info}>
              <h3>What happens next?</h3>
              <ul>
                <li>You'll receive a confirmation email</li>
                <li>We'll keep you updated on product development</li>
                <li>Early access to pre-orders when available</li>
                <li>Exclusive updates and special offers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
