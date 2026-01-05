import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The Future of
            <span className={styles.highlight}> Multi-Material</span>
            <br />
            3D Printing
          </h1>
          <p className={styles.heroSubtitle}>
            Introducing the poly1-mini: A revolutionary resin 3D printer that
            enables seamless multi-material printing in a compact, professional package.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/waitlist" className={styles.primaryButton}>
              Join Waitlist
            </Link>
            <Link href="/product" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/printer-render.png"
            alt="poly1-mini 3D Printer"
            width={800}
            height={600}
            priority
            className={styles.printerImage}
          />
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Polysynth?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Multi-Material</h3>
              <p>
                Print with multiple resin materials in a single build, creating
                complex objects with varying properties and colors.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>High Precision</h3>
              <p>
                Exceptional detail and accuracy for professional-grade results
                in every print.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Professional Quality</h3>
              <p>
                Built for designers, engineers, and creators who demand the best
                from their 3D printing workflow.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Compact Design</h3>
              <p>
                The poly1-mini fits perfectly in any workspace without
                compromising on capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your 3D Printing?</h2>
            <p>Be among the first to experience the future of multi-material printing.</p>
            <Link href="/waitlist" className={styles.primaryButton}>
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
