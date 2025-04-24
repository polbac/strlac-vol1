"use client";

import Link from "next/link";

import { Transition } from "../../components/Transition";

export default function Strlac() {
  return (
    <Link href={"/aventura/laberinto"} className="aventura-center">
      <Transition>
        <img src="/aventura/tunnel.png" />
      </Transition>
    </Link>
  );
}
