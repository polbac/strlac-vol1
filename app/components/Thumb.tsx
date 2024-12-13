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
  const [loading, setLoading] = useState(true);
  const [myImage, setImg] = useState<HTMLImageElement | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thisImg = new Image();
    thisImg.src = image;
    thisImg.onload = () => {
      setImg(thisImg);
      setLoading(false);
    };
  }, [image]);

  return (
    <div
      className="thumb"
      ref={parentRef}
      style={{ width: "200px", height: "200px" }}
    >
      <Link href={`artistx/${slug}`}>
        <Transition>
          <div style={{ height: "150px" }}>
            {myImage && (
              <ImageAscii
                image={myImage}
                parentRef={parentRef}
                artType={ArtTypeEnum.ASCII}
                fontColor={"#02f503"}
                charsPerLine={100}
                charsPerColumn={100}
                backgroundColor={"black"}
              />
            )}
          </div>
        </Transition>
        <p style={{ textTransform: "uppercase", fontSize: "1rem" }}>{name}</p>
      </Link>
    </div>
  );
};
