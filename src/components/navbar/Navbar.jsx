import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo (Reno)</div>
      <div>Map</div>
      <div>Messages</div>
      <div>Menu</div>      
    </div>
  )
}
