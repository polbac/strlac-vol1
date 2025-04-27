"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DATA } from "../../data";
import { Transition } from "../../components/Transition";

export default function Strlac() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(DATA[Math.floor(Math.random() * DATA.length)].bio);
  }, []);
  return (
    <Link href={"/aventura/pelea"} className="aventura-center">
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
