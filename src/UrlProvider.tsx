import { FunctionComponent, ReactNode, useState } from "react";
import UrlContext, { UrlContextProps, UrlData } from "./UrlContext";

interface UrlProviderProps {
  children: ReactNode;
}

const UrlProvider: FunctionComponent<UrlProviderProps> = ({ children }) => {
  const storedData = localStorage.getItem("arrShortenedLink");
  let data;
  if (storedData !== null) {
    try {
      data = JSON.parse(storedData);
    } catch (error) {
      console.error("Invalid JSON:", storedData);
    }
  }

  const [result, setResult] = useState<UrlData[]>(data || []);

  const contextValue: UrlContextProps = {
    result: result,
    setResult: setResult,
  };

  return (
    <UrlContext.Provider value={contextValue}>{children}</UrlContext.Provider>
  );
};

export default UrlProvider;
