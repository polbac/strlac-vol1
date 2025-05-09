"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Transition } from "../../components/Transition";

export default function Strlac() {
  useEffect(() => {
    document.querySelector(".scanlines")?.classList.add("hide-player");

    return () => {
      document.querySelector(".scanlines")?.classList.remove("hide-player");
    };
  }, []);
  return (
    <Link href={"/aventura/laberinto"} className="aventura-center">
      <Transition>
        <img src="/aventura/tunnel.png" />
      </Transition>
    </Link>
  );
}
