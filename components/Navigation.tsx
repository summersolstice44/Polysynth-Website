'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/waitlist', label: 'Waitlist' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  // Letter positions around the circle (from the provided HTML)
  const letters = [
    { char: 'p', transform: 'translate(80px) rotate(90deg)' },
    { char: 'o', transform: 'translate(67.3003px, 43.2513px) rotate(122.727deg)' },
    { char: 'l', transform: 'translate(33.2332px, 72.7706px) rotate(155.455deg)' },
    { char: 'y', transform: 'translate(-11.3852px, 79.1857px) rotate(188.182deg)' },
    { char: ' ', transform: 'translate(-52.3889px, 60.46px) rotate(220.909deg)' },
    { char: 's', transform: 'translate(-76.7594px, 22.5386px) rotate(253.636deg)' },
    { char: 'y', transform: 'translate(-76.7594px, -22.5386px) rotate(286.364deg)' },
    { char: 'n', transform: 'translate(-52.3889px, -60.46px) rotate(319.091deg)' },
    { char: 't', transform: 'translate(-11.3852px, -79.1857px) rotate(351.818deg)' },
    { char: 'h', transform: 'translate(33.2332px, -72.7706px) rotate(384.545deg)' },
    { char: ' ', transform: 'translate(67.3003px, -43.2513px) rotate(417.273deg)' },
  ]

  // Individual colors for each letter on hover
  const letterColors = [
    '#ff0000', // p - red
    '#ff6b6b', // o - light red
    '#ff8c00', // l - orange
    '#ffd700', // y - yellow
    '#cccccc', // space - grey
    '#00ff00', // s - green
    '#00bfff', // y - blue
    '#4b0082', // n - indigo
    '#8b00ff', // t - violet
    '#ff1493', // h - pink
    '#cccccc', // space - grey
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.circularTextContainer}>
            <div className={styles.circularText}>
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className={styles.circularLetter}
                  data-index={index}
                  style={{
                    transform: letter.transform,
                    '--hover-color': letterColors[index],
                  } as React.CSSProperties & { '--hover-color': string }}
                >
                  {letter.char}
                </span>
              ))}
            </div>
            <div className={styles.centerImage}>
              <Image
                src="/logo.png"
                alt="Polysynth Logo"
                width={50}
                height={50}
                priority
              />
            </div>
          </div>
        </Link>
        
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
