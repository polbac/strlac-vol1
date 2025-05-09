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
    <Link href={"/aventura/pelea"} className="aventura-center">
      <Transition>
        <img src="/aventura/fractal.gif" style={{ width: "100%" }} />
      </Transition>
    </Link>
  );
}
