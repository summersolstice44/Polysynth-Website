import Link from 'next/link'
import styles from './page.module.css'

export default function Applications() {
  const applications = [
    {
      title: 'Product Design',
      description: 'Create prototypes and final products with multiple materials and colors in a single print. Perfect for consumer products, electronics enclosures, and design iterations.',
      icon: '🎨',
    },
    {
      title: 'Medical & Dental',
      description: 'Produce precise medical models, dental appliances, and custom prosthetics with biocompatible materials and high accuracy.',
      icon: '🏥',
    },
    {
      title: 'Jewelry & Fashion',
      description: 'Design intricate jewelry pieces and fashion accessories with fine details and multiple material properties.',
      icon: '💎',
    },
    {
      title: 'Engineering & Manufacturing',
      description: 'Rapid prototyping for engineering applications. Test form, fit, and function with materials that match final production properties.',
      icon: '⚙️',
    },
    {
      title: 'Art & Sculpture',
      description: 'Bring artistic visions to life with multi-material capabilities that enable complex color gradients and material transitions.',
      icon: '🎭',
    },
    {
      title: 'Education & Research',
      description: 'Ideal for educational institutions and research labs exploring advanced 3D printing applications and material science.',
      icon: '🔬',
    },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Applications</h1>
            <p className={styles.subtitle}>
              Discover the endless possibilities of multi-material resin 3D printing
            </p>
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className="container">
          <div className={styles.applicationsGrid}>
            {applications.map((app, index) => (
              <div key={index} className={styles.applicationCard}>
                <div className={styles.icon}>{app.icon}</div>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.useCases}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Multi-Material Matters</h2>
          <div className={styles.useCasesContent}>
            <div className={styles.useCase}>
              <h3>Complex Geometries</h3>
              <p>
                Print objects with internal structures, overhangs, and complex
                geometries that would be impossible with traditional single-material
                printing. Combine rigid and flexible materials in one build.
              </p>
            </div>
            <div className={styles.useCase}>
              <h3>Functional Prototypes</h3>
              <p>
                Create prototypes that not only look like the final product but
                also function like it. Use different materials for different
                components to test real-world performance.
              </p>
            </div>
            <div className={styles.useCase}>
              <h3>Time & Cost Savings</h3>
              <p>
                Eliminate the need for assembly and post-processing. Print
                complete, multi-part assemblies in a single build cycle, saving
                time and reducing material waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Explore What's Possible?</h2>
            <p>Join our waitlist to be among the first to experience the future of 3D printing.</p>
            <Link href="/waitlist" className={styles.ctaButton}>
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
