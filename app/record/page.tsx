"use client";
import { Transition } from "../components/Transition";
import Link from "next/link";

export default function Strlac() {
  return (
    <Link href={"/record/humanxs"}>
      <Transition>
        <p style={{ textTransform: "uppercase" }}>
          colectivo tecno-biológico de músicas mutantes, arte sonoro y otras
          aventuras sónicas.
        </p>
      </Transition>
      <div className="strlac blink_me">
        <img
          src="/record.png"
          style={{
            position: "absolute",
            right: "10px",
            bottom: "50px",
            width: "65%",
          }}
        />
      </div>
    </Link>
  );
}
