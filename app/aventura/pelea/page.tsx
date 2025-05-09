"use client";
import { ORACULOS } from "../../oraculos";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <Link href={"/aventura/castillo"} className="aventura-center">
      <Transition>
        <img
          src="/aventura/pelea.png"
          style={{ width: "auto", height: "400px" }}
        />
      </Transition>
      <p>{text}</p>
    </Link>
  );
}
