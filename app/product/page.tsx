import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Product() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>poly1-mini</h1>
            <p className={styles.subtitle}>
              The compact, professional-grade multi-material resin 3D printer
            </p>
          </div>
        </div>
      </section>

      <section className={styles.productShowcase}>
        <div className="container">
          <div className={styles.showcaseGrid}>
            <div className={styles.imageContainer}>
              <Image
                src="/printer-render.png"
                alt="poly1-mini 3D Printer"
                width={800}
                height={600}
                className={styles.productImage}
              />
            </div>
            <div className={styles.specs}>
              <h2>Technical Specifications</h2>
              <div className={styles.specList}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Build Volume</span>
                  <span className={styles.specValue}>Compact Professional Size</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Material Support</span>
                  <span className={styles.specValue}>Multi-Material Resin</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Resolution</span>
                  <span className={styles.specValue}>High Precision</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Connectivity</span>
                  <span className={styles.specValue}>USB & Network</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Software</span>
                  <span className={styles.specValue}>Professional Suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Multi-Material Printing</h3>
              <p>
                Seamlessly switch between different resin materials in a single
                print job. Create objects with varying properties, colors, and
                textures all in one build.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Precision Engineering</h3>
              <p>
                Built with precision in mind. Every component is designed to
                deliver consistent, high-quality results print after print.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Professional Workflow</h3>
              <p>
                Integrated software suite designed for professionals. Intuitive
                interface with advanced control over every aspect of your prints.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Compact Footprint</h3>
              <p>
                Don't let the size fool you. The poly1-mini packs professional
                capabilities into a space-efficient design perfect for any workspace.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Reliable Performance</h3>
              <p>
                Engineered for reliability. Built to handle continuous operation
                with minimal maintenance and maximum uptime.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Future-Ready</h3>
              <p>
                Designed with the future in mind. Regular firmware updates and
                expanding material compatibility keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Join the waitlist to be notified when the poly1-mini becomes available.</p>
            <Link href="/waitlist" className={styles.ctaButton}>
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
