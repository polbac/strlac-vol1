"use client";
import { ImageAscii, ArtTypeEnum } from "image-ascii-art";
import Link from "next/link";
import { Transition } from "../components/Transition";
import { useRef, FC, useState, useEffect } from "react";

export const Thumb: FC<{ slug: string; name: string; image: string }> = ({
  slug,
  name,
  image,
}) => {
  return (
    <div className="thumb" style={{ width: "200px", height: "200px" }}>
      <Link href={`artistx/${slug}`}>
        <Transition>
          <img src={image} style={{ height: "200px !important" }} />
        </Transition>
        <p style={{ textTransform: "uppercase", fontSize: "1rem" }}>{name}</p>
      </Link>
    </div>
  );
};
