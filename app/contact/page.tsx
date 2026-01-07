import styles from './page.module.css'

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Get in touch with the Polysynth team
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Let&apos;s Connect</h2>
              <p>
                Have questions about the poly1-mini? Interested in partnerships
                or collaborations? We&apos;d love to hear from you.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Founder</h3>
                  <p>Eric Potempa</p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Email</h3>
                  <a href="mailto:eric@polysynth.io" className={styles.emailLink}>
                    eric@polysynth.io
                  </a>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Twitter</h3>
                  <a href="https://x.com/eptmpa" className={styles.contactItem}>
                     @eptmpa
                  </a>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <h3>Instagram</h3>
                  <a href="https://www.instagram.com/polysynth.io/" className={styles.contactItem}>
                    @polysynth.io
                  </a>
                </div>
              </div>

              <div className={styles.social}>
                <h3>Follow Us</h3>
                <p>Stay updated on our latest developments and announcements.</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
