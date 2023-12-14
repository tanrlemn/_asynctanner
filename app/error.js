'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

export default function Error({ error, reset }) {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    setLoading(false);
  }, [error, setLoading]);

  return (
    <div>
      <div>
        <h2>Oops... </h2>
        <p>Something went wrong</p>

        <div>
          <div onClick={() => reset()}>Try again</div>
        </div>
      </div>
    </div>
  );
}
