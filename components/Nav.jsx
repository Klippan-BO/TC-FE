import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { useAuth } from '../context/AuthContext';

function Nav() {
  const { signOutUser } = useAuth();
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContainer}>
        <ul>
          <li>
            <Link href="#">TC</Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
          <li>
            <Link href="/user">Profile</Link>
          </li>
          <li
            onClick={signOutUser}
          >
            <span
              className={navStyles.logoutBtn}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
