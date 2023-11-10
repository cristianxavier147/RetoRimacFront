import { useState, useEffect } from 'react';

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    // Add a listener to detect changes in screen size
    window.addEventListener('resize', handleResize);

    // Call handleResize to set the initial state
    handleResize();

    // Clean up the listener when the component using the hook unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useMobileDetection;
