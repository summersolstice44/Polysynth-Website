import styles from './page.module.css'

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>About Polysynth</h1>
            <p className={styles.subtitle}>
              Pioneering the future of multi-material 3D printing
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>
              At Polysynth, we believe that 3D printing should be as versatile
              and capable as your imagination. Our mission is to democratize
              multi-material resin printing, making it accessible to designers,
              engineers, artists, and creators who need more than what traditional
              single-material printers can offer.
            </p>
            <p>
              We&apos;re not just building a printer—we&apos;re building a platform that
              enables new possibilities in design, manufacturing, and creativity.
              The poly1-mini represents our commitment to innovation, quality,
              and the future of additive manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.founder}>
        <div className="container">
          <div className={styles.founderContent}>
            <div className={styles.founderInfo}>
              <h2>Meet the Founder</h2>
              <h3>Eric Potempa</h3>
              <p>
                Eric Potempa is the visionary behind Polysynth. With a passion
                for pushing the boundaries of what&apos;s possible in 3D printing,
                Eric founded Polysynth to solve the limitations he experienced
                in existing multi-material printing solutions.
              </p>
              <p>
                Drawing from years of experience in additive manufacturing and
                product development, Eric set out to create a printer that
                combines professional-grade capabilities with an accessible,
                user-friendly design. The poly1-mini is the result of this vision.
              </p>
              <p>
                Under Eric&apos;s leadership, Polysynth is committed to continuous
                innovation and excellence, always striving to deliver products
                that exceed expectations and enable new creative possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <h3>Innovation</h3>
              <p>
                We&apos;re constantly pushing the boundaries of what&apos;s possible,
                exploring new materials, techniques, and applications.
              </p>
            </div>
            <div className={styles.value}>
              <h3>Quality</h3>
              <p>
                Every component, every print, every interaction is held to the
                highest standards of excellence.
              </p>
            </div>
            <div className={styles.value}>
              <h3>Accessibility</h3>
              <p>
                We believe advanced technology should be accessible to everyone,
                from hobbyists to professionals.
              </p>
            </div>
            <div className={styles.value}>
              <h3>Community</h3>
              <p>
                We&apos;re building more than a product—we&apos;re building a community
                of creators, innovators, and visionaries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
