import { mount as authMount } from 'auth/authApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    authMount(ref.current, {
      onNavigate: (location) => {
        console.log(location);
      },
    });
  });
  return <div ref={ref} />;
};
