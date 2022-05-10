import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

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
          <Link href='/trails'> Trails </Link>
        </li>
        <li>
          <Link href='/user'> User </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav