"use client";

import { usePathname } from "next/navigation";

import { AudioPlayer } from "./components/AudioPlayer";
import { Transition } from "./components/Transition";
import "./globals.css";

import { useEffect, useState, useRef, LegacyRef } from "react";
import { Intro } from "./components/Intro";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import {
  BackgroundProvider,
  useBackgroundContext,
} from "./context/BackgroundContext";

enum Screen {
  INTRO,
  LOGO,
  APP,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showIntro, setShowIntro] = useState<Screen>(Screen.INTRO);
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>();
  const [backgroundPositionY, setBackgroundPosition] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setBackgroundPosition(backgroundPositionY - 1),
      100
    );
    return () => clearInterval(i);
  }, [setBackgroundPosition, backgroundPositionY]);

  useEffect(() => {
    if (!scrollRef?.current?.scrollTop) {
      return;
    }

    scrollRef.current.scrollTop = 0;
  }, [pathname, scrollRef]);

  return (
    <html lang="en">
      <head>
        <title>STRLAC VOL 1</title>
        <link rel="icon" href="/aventura/heroe.png" sizes="any" />
      </head>
      <body>
        <BackgroundProvider>
          <AudioPlayerProvider>
            <main
              className={`scanlines ${
                showIntro === Screen.LOGO ? "green-logo" : "black"
              }`}
            >
              <div className="screen">
                <div className="overlay">
                  <div className="app-container ">
                    {showIntro == Screen.INTRO && (
                      <Intro onComplete={() => setShowIntro(Screen.LOGO)} />
                    )}

                    {showIntro == Screen.LOGO && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Transition>
                          <img
                            src="/screen-logo.png"
                            width="200"
                            onClick={() => setShowIntro(Screen.APP)}
                          />
                        </Transition>
                      </div>
                    )}

                    {showIntro == Screen.APP && (
                      <>
                        <div className="flex cols-container">
                          <div
                            className="col1"
                            ref={
                              scrollRef as unknown as LegacyRef<HTMLDivElement>
                            }
                          >
                            <div>{children}</div>
                          </div>
                        </div>
                        <AudioPlayer />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </AudioPlayerProvider>
        </BackgroundProvider>

        <div className="scanline"></div>
        <div className="scanline"></div>
        <div className="flicker"></div>

        <link href="/consolas/stylesheet.css" rel="stylesheet" />
      </body>
    </html>
  );
}
