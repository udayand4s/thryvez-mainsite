'use client';

import { useEffect, useState } from 'react';
import VerticalLoader from './vertical-loader';

export default function AppLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 2800); // ⬅️ force minimum loader time

    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return <VerticalLoader />;
  }

  return <>{children}</>;
}
