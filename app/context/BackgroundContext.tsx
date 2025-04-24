"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface BackgroundContext {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundContext = createContext<BackgroundContext>({
  background: "black",
  setBackground: () => {},
});

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<string>("black");

  return (
    <>
      <BackgroundContext.Provider value={{ background, setBackground }}>
        {children}
      </BackgroundContext.Provider>
    </>
  );
};

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);

  return context;
};
