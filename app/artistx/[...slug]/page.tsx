"use client";
import { ImageAscii, ArtTypeEnum } from "image-ascii-art";
import { useEffect, useRef, useState } from "react";
import { Transition } from "../../components/Transition";
import { DATA } from "../../data";

import Link from "next/link";

export default function Artistxs({ params }) {
  const slug = params.slug[0];
  const data = DATA.find((a) => a.slug === slug);

  const [loading, setLoading] = useState(true);
  const [myImage, setImg] = useState<HTMLImageElement | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data?.thumb) {
      return;
    }
    const thisImg = new Image();

    thisImg.src = `/${data?.thumb}`;
    thisImg.onload = () => {
      setImg(thisImg);
      setLoading(false);
    };
  }, [data]);

  return (
    <>
      <Transition>
        <Link href="/artistxs">← Volver</Link>
      </Transition>
      <div className="artistx">
        <div className="left" ref={parentRef}>
          <Transition>
            {myImage && (
              <ImageAscii
                image={myImage}
                parentRef={parentRef}
                charsPerLine={30}
                charsPerColumn={30}
                artType={ArtTypeEnum.ASCII}
                fontColor={"#02f503"}
                backgroundColor={"black"}
              />
            )}

            <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>RRSS</p>
            {data.instagram && (
              <a className="rrss" href={data.instagram}>
                instagram
              </a>
            )}
            {data.soundcloud && (
              <a className="rrss" href={data.soundcloud}>
                soundcloud
              </a>
            )}
            {data.website && (
              <a className="rrss" href={data.website}>
                website
              </a>
            )}
            {data.linktree && (
              <a className="rrss" href={data.linktree}>
                linktree
              </a>
            )}
            {data.x && (
              <a className="rrss" href={data.x}>
                x
              </a>
            )}
            {data.youtube && (
              <a className="rrss" href={data.youtube}>
                youtube
              </a>
            )}
          </Transition>
        </div>
        <div className="right">
          <Transition>
            <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
              {data?.name}
            </h2>
          </Transition>
          <Transition>
            <p>{data?.bio}</p>
          </Transition>
        </div>
      </div>
    </>
  );
}
