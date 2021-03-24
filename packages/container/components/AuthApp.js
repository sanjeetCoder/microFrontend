import { authMount as mountAuth } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountAuth(ref.current, {
      onNavigate: (location) => {
        console.log(location);
      },
    });
  });
  return <div ref={ref} />;
};
