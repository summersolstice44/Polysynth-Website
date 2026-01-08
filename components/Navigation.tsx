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

  // Letter positions around the circle - scaled down for compact header
  const letters = [
    { char: 'p', transform: 'translate(35px) rotate(90deg)' },
    { char: 'o', transform: 'translate(29px, 19px) rotate(122.727deg)' },
    { char: 'l', transform: 'translate(15px, 32px) rotate(155.455deg)' },
    { char: 'y', transform: 'translate(-5px, 35px) rotate(188.182deg)' },
    { char: ' ', transform: 'translate(-23px, 27px) rotate(220.909deg)' },
    { char: 's', transform: 'translate(-34px, 10px) rotate(253.636deg)' },
    { char: 'y', transform: 'translate(-34px, -10px) rotate(286.364deg)' },
    { char: 'n', transform: 'translate(-23px, -27px) rotate(319.091deg)' },
    { char: 't', transform: 'translate(-5px, -35px) rotate(351.818deg)' },
    { char: 'h', transform: 'translate(15px, -32px) rotate(384.545deg)' },
    { char: ' ', transform: 'translate(29px, -19px) rotate(417.273deg)' },
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
                  style={{
                    transform: letter.transform,
                  }}
                >
                  {letter.char}
                </span>
              ))}
            </div>
            <div className={styles.centerImage}>
              <Image
                src="/logo.png"
                alt="Polysynth Logo"
                width={60}
                height={60}
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
