import Nav from './Nav.js'
import styles from '../styles/Home.module.css'

function Layout({ children }) {
  console.log(children)
  
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout