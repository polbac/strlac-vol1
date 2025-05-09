"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ORACULOS } from "../../oraculos";
import { Transition } from "../../components/Transition";

export default function Strlac() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.querySelector(".scanlines")?.classList.add("hide-player");

    return () => {
      document.querySelector(".scanlines")?.classList.remove("hide-player");
    };
  }, []);

  useEffect(() => {
    setText(ORACULOS[Math.floor(Math.random() * ORACULOS.length)]);
  }, []);
  return (
    <Link href={"/aventura/fractal"} className="aventura-center">
      <Transition>
        <img src="/aventura/person.png" style={{ height: "400px" }} />
      </Transition>
      <p className="blink" style={{ fontSize: "1rem" }}>
        {text}
      </p>
    </Link>
  );
}
