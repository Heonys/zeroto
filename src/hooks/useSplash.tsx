import { useEffect, useState } from "react";

const useSplash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = () => {
        setShowSplash(false);
      };
      window.addEventListener("load", handler);

      return () => {
        window.removeEventListener("load", handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        setShowSplash(false);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  return { showSplash };
};

export default useSplash;
