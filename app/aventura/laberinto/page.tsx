"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ORACULOS } from "../../oraculos";
import { Transition } from "../../components/Transition";

export default function Strlac() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(ORACULOS[Math.floor(Math.random() * ORACULOS.length)]);
  }, []);
  useEffect(() => {
    document.querySelector(".scanlines")?.classList.add("hide-player");

    return () => {
      document.querySelector(".scanlines")?.classList.remove("hide-player");
    };
  }, []);
  return (
    <Link href={"/aventura/heroe"} className="aventura-center">
      <Transition>
        <img src="/aventura/laberinto.png" />
      </Transition>
      <div className="flex" style={{ gap: "10px" }}>
        <div
          className="blink"
          style={{ width: "66.66%", marginTop: "2rem", fontSize: "1rem" }}
        >
          {text}
        </div>

        <div style={{ width: "33.33% " }}>
          <img height="200" src="/aventura/laberinto-heroe.png" />
        </div>
      </div>
    </Link>
  );
}
