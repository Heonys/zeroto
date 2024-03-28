import { useEffect, useState } from "react";

const useLoaded = () => {
  const [documentReady, setDocumentReady] = useState(false);

  useEffect(() => {
    const handleReadyStateChange = () => {
      setDocumentReady(document.readyState === "complete");
    };

    if (document.readyState === "complete") {
      setDocumentReady(true);
    } else {
      document.addEventListener("readystatechange", handleReadyStateChange);
    }

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  return documentReady;
};

export default useLoaded;
