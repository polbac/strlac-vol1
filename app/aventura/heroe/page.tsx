"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Transition } from "../../components/Transition";

export default function Strlac() {
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
          src="/aventura/heroe.png"
          style={{ width: "auto", height: "260px" }}
        />
      </Transition>
    </Link>
  );
}
