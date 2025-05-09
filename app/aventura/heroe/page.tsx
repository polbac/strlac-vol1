"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
    <Link href={"/aventura/player"} className="aventura-center">
      <Transition>
        <img
          src="/aventura/pajaro.gif"
          style={{ width: "auto", height: "460px" }}
        />
      </Transition>
      <p style={{ fontSize: "1rem" }}>{text}</p>
    </Link>
  );
}
