"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
/* import { Player } from "./components/Player"; */
import { AudioPlayer } from "./components/AudioPlayer";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState, useRef, LegacyRef } from "react";
import { Intro } from "./components/Intro";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showIntro, setShowIntro] = useState(false);
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
        <link rel="icon" href="/favicon.jpeg" sizes="any" />
      </head>
      <body>
        <AudioPlayerProvider>
          <main className="scanlines">
            <div className="screen">
              <div className="overlay">
                <div className="app-container ">
                  {showIntro ? (
                    <Intro onComplete={() => setShowIntro(false)} />
                  ) : (
                    <>
                      <p className="copy">PRIMER COMPILADO STRLAC 2024</p>
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

        <div className="scanline"></div>
        <div className="scanline"></div>
        <div className="flicker"></div>

        <link href="/font2/stylesheet.css" rel="stylesheet" />
      </body>
    </html>
  );
}
