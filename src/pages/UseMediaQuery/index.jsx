import { useDebugValue, useEffect, useState } from 'react';

export const UseMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(Boolean(matchMedia.matches));

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  return match;
};
