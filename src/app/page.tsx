'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/user/signin');
  }, []);

  return (
    <div className='h-screen'>redirecting...</div>
  );
};

export default HomePage;
