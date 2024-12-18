"use client";
import Meteors from "../components/ui/meteors";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { Player } from "./components/Player";
import "./globals.css";
import Link from "next/link";
import { Transition } from "./components/Transition";
import { useEffect, useState, useRef } from "react";
import { Intro } from "./components/Intro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body>
        <main className="scanlines">
          <div className="screen">
            <div className="overlay">
              <div className="app-container ">
                <p className="copy">PRIMER COMPILADO STRLAC 2024</p>
                <Meteors />

                {showIntro ? (
                  <Intro />
                ) : (
                  <div className="flex cols-container">
                    <Player />
                    <div className="col1" ref={scrollRef}>
                      <Image
                        src={"/brand.png"}
                        alt="srtlac"
                        width={250}
                        height={200}
                        className="str-vol-1 glitch-effect"
                      />
                      <div>{children}</div>
                    </div>
                    <div
                      className="col2"
                      style={{
                        backgroundPositionX: `${backgroundPositionY}px`,
                      }}
                    >
                      <Transition>
                        <Link
                          className={`button ${
                            pathname.indexOf("artistx") === -1 && "active"
                          }`}
                          href="/"
                        >
                          <img src="/compilado.png" width="100" />
                        </Link>

                        <Link
                          className={`button ${
                            pathname.indexOf("artistx") !== -1 && "active"
                          }`}
                          href="/artistxs"
                        >
                          <img src="/artistxs.png" width="90" />
                        </Link>
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

        <link href="/font/stylesheet.css" rel="stylesheet" />
      </body>
    </html>
  );
}
