import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';
import { useAuth } from '../context/AuthContext';
import Leaderboard from './Leaderboard';
import logo from '../public/Logo.png';

function Nav() {
  const { currentUser, signOutUser } = useAuth();
  const router=useRouter();

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContainer}>
        <ul>
          <li>
            <Link href="/map">
              <Image
                src={logo}
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
          <li>
            <Link href={{ pathname: '/[username]', query: { username: currentUser?.displayName } }}>
              Profile
            </Link>
          </li>
          <li>
            <span className={navStyles.leaderboard}>
              <Leaderboard />
            </span>
          </li>
          <li
            onClick={signOutUser}
            style={{
              position: 'absolute',
              right: 0,
            }}
            className={navStyles.logout}
          >
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
