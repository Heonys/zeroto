import { loadedAtom } from "@/atom/load";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useLoaded = () => {
  const [isLoaded, setIsLoaded] = useRecoilState(loadedAtom);

  useEffect(() => {
    const item = localStorage.getItem("loaded");

    if (!item) {
      if (!isLoaded) {
        const timeout = setTimeout(() => {
          setIsLoaded(true);
          localStorage.setItem("loaded", "true");
        }, 5000);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsLoaded(true);
    }
  }, []);

  return { isLoaded };
};

export default useLoaded;
