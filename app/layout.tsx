"use client";
import Meteors from "../components/ui/meteors";
import Image from "next/image";
import { Player } from "./components/Player";
import "./globals.css";
import Link from "next/link";
import { Transition } from "./components/Transition";
import { useEffect, useState } from "react";
import { Intro } from "./components/Intro";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 4500);
  }, []);
  return (
    <html lang="en">
      <body>
        <main className="scanlines">
          <div className="screen">
            <div className="overlay">
              <div className="app-container ">
                <Meteors />
                {showIntro ? (
                  <Intro />
                ) : (
                  <div className="flex">
                    <Player />
                    <div className="col1">
                      <Image
                        src={"/brand.png"}
                        alt="srtlac"
                        width={250}
                        height={200}
                        className="str-vol-1"
                      />
                      <div>{children}</div>
                    </div>
                    <div className="col2">
                      <Transition>
                        <Link className="button" href="/">
                          <img src="/compilado.png" width="100" />
                        </Link>
                      </Transition>
                      <div></div>
                      <Transition>
                        <Link className="button" href="/artistxs">
                          <img src="/artistxs.png" width="90" />
                        </Link>
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
