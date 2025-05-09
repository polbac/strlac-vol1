"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Transition } from "../components/Transition";

export default function Strlac() {
  useEffect(() => {
    document.querySelector(".scanlines")?.classList.add("green");
    document.querySelector(".scanlines")?.classList.remove("black");

    return () => {
      document.querySelector(".scanlines")?.classList.remove("green");
      document.querySelector(".scanlines")?.classList.add("black");
    };
  }, []);

  return (
    <Link href={"/aventura/tunel"} className="aventura">
      <Transition>
        <img src="/aventura/1.png" height="300" />
      </Transition>
    </Link>
  );
}
