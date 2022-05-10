import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { onAuthStateChanged, auth } from '../firebase';
import RedirectPage from './Login/RedirectPage';

export default function RouteGuard({children}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { currentUser } = useAuth();

  function authCheck(url) {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];

    onAuthStateChanged(auth, (user) => {
      if (!user && !publicPaths.includes(path)) {
        setAuthorized(false);
        setTimeout(() => {
          router.push({
            pathname: '/login',
            query: { returnUrl: router.asPath },
          });
        }, 500);
      } else if (user && publicPaths.includes(path)) {
        setAuthorized(true);
        router.push({
          pathname: '/map',
        });
      } else {
        setAuthorized(true);
      }
    });
  }

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [currentUser]);

  return (
    authorized
      ? children
      : <RedirectPage />);
}