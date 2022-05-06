import Nav from './Nav'
import React from 'react'
import styles from '../styles/Home.module.css'

function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>

    </>
  )
}

export default Layout