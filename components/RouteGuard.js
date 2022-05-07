import React ,{ useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';


export default function RouteGuard({children}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];

    if (!currentUser?.email && !publicPaths.includes(path)) {
      console.log('redirecting due to unauthorized user', currentUser);
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }


  return (authorized && children);
}