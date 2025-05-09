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
    <Link href={"/aventura/laberinto"} className="aventura-center">
      <Transition>
        <img src="/aventura/tunnel.png" style={{ height: "70vh" }} />
      </Transition>
      <div style={{ fontSize: "1rem" }}>{text}</div>
    </Link>
  );
}
