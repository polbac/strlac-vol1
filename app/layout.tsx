"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import { Player } from "./components/Player";
import "./globals.css";
import Link from "next/link";
import { Transition } from "./components/Transition";
import { useEffect, useState, useRef, LegacyRef } from "react";
import { Intro } from "./components/Intro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>();
  const [backgroundPositionY, setBackgroundPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 4500);
  }, []);

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
        <main className="scanlines">
          <div className="screen">
            <div className="overlay">
              <div className="app-container ">
                <p className="copy">PRIMER COMPILADO STRLAC 2024</p>

                {showIntro ? (
                  <Intro />
                ) : (
                  <div className="flex cols-container">
                    <Player />
                    <div
                      className="col1"
                      ref={scrollRef as unknown as LegacyRef<HTMLDivElement>}
                    >
                      <div>{children}</div>
                    </div>
                    <div
                      className="col2"
                      style={{
                        backgroundPositionX: `${backgroundPositionY}px`,
                      }}
                    >
                      <Transition>
                        <Image
                          src={"/brand.png"}
                          alt="srtlac"
                          width={250}
                          height={200}
                          className="str-vol-1 glitch-effect"
                        />
                      </Transition>
                      <Transition>
                        <Link
                          className={`button ${
                            pathname.indexOf("artistx") === -1 && "active"
                          }`}
                          href="/"
                          onClick={() => audioRef1?.current?.play()}
                          onMouseEnter={() => audioRef1?.current?.play()}
                        >
                          <img src="/compilado.png" />
                          <audio ref={audioRef1} controls className="hidden">
                            <source
                              src={"/doom/sonido1.mp3"}
                              type="audio/mp3"
                            />
                            Your browser does not support the audio element.
                          </audio>
                          <audio ref={audioRef3} controls className="hidden">
                            <source src={"/click.mp3"} type="audio/mp3" />
                            Your browser does not support the audio element.
                          </audio>
                        </Link>

                        <Link
                          className={`button ${
                            pathname.indexOf("artistx") !== -1 && "active"
                          }`}
                          href="/artistxs"
                          onClick={() => audioRef3?.current?.play()}
                          onMouseEnter={() => audioRef2?.current?.play()}
                        >
                          <img src="/artistas.png" />
                          <audio ref={audioRef2} controls className="hidden">
                            <source
                              src={"/doom/sonido2.mp3"}
                              type="audio/mp3"
                            />
                            Your browser does not support the audio element.
                          </audio>
                        </Link>
                        <img
                          src="/doom/controls.png"
                          width="100%"
                          className="controls"
                        />
                        <div className="redes">
                          <a
                            target="_blank"
                            className="rrss"
                            href="https://strlacrecords.bandcamp.com/"
                          >
                            → bandcamp
                          </a>
                          <a
                            target="_blank"
                            className="rrss"
                            href="https://www.instagram.com/strlacrecords/"
                          >
                            → instagram
                          </a>
                          <a
                            target="_blank"
                            className="rrss"
                            href="https://soundcloud.com/strlac-records"
                          >
                            → soundcloud
                          </a>
                        </div>
                      </Transition>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <div className="scanline"></div>
        <div className="scanline"></div>
        <div className="flicker"></div>

        <link href="/font2/stylesheet.css" rel="stylesheet" />
      </body>
    </html>
  );
}
