import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import navStyles from '../styles/Nav.module.css';
import { useAuth } from '../context/AuthContext';
import Leaderboard from './Leaderboard';

function Nav() {
  const { currentUser, signOutUser } = useAuth();
  const router=useRouter()

  console.log("currentUser",currentUser)

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContainer}>
        <ul>
          <li>
            <Link href="/">TC</Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
          <li>
            <Link href="/trail">Trail</Link>
          </li>
          <li>
            <Link href={{pathname:'/[username]',query:{username:currentUser.displayName} }}

            >Profile</Link>
          </li>
          <li>
            <span className={navStyles.leaderboard}>
              <Leaderboard />
            </span>
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
