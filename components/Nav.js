import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Leaderboard from './Leaderboard/index.js'

import React from 'react'

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'> Home </Link>
        </li>
        <li>
          <Link href='/map'> Map </Link>
        </li>
        <li>
          <Link href='/trail'> Trail </Link>
        </li>
        <li>
          <Link href='/user'> User </Link>
        </li>
        <li>
          <Leaderboard />
        </li>
      </ul>
    </nav>
  )
}

export default Nav