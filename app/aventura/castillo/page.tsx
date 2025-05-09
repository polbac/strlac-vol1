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
    <Link href={"/"} className="aventura-center">
      <Transition>
        <img
          src="/aventura/castillo.png"
          style={{ width: "auto", height: "500px" }}
        />
      </Transition>
      <p style={{ fontSize: "1rem" }}>{text}</p>
    </Link>
  );
}
