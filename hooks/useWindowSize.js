import { useState, useEffect } from "react";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    let prevWidth = 0;
    function handleResize() {
      // Set window width/height to state
      const { innerWidth, innerHeight } = window;
      if (prevWidth !== innerWidth) {
        setWindowSize({
          width: innerWidth,
          height: innerHeight,
        });
        prevWidth = innerWidth;
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

export default useWindowSize;
