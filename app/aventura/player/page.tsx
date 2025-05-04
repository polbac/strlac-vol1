"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ORACULOS } from "../../oraculos";
import { Transition } from "../../components/Transition";

export default function Strlac() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(ORACULOS[Math.floor(Math.random() * ORACULOS.length)]);
  }, []);
  return (
    <Link href={"/"} className="aventura-center">
      <Transition>
        <img
          src="/aventura/person.png"
          style={{ width: "100%", height: "auto" }}
        />
      </Transition>
      <p>{text}</p>
    </Link>
  );
}
