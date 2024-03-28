import { loadedAtom } from "@/atom/load";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useLoaded = () => {
  const [isLoaded, setIsLoaded] = useRecoilState(loadedAtom);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        // setDocumentReady(true);
        setIsLoaded(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return { isLoaded };
};

export default useLoaded;
