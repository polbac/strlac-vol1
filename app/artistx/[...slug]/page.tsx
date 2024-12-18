"use client";

import { Transition } from "../../components/Transition";
import { DATA } from "../../data";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Artistxs() {
  const pathname = usePathname();

  const slug = pathname.split("/")[2];
  const data = DATA.find((a) => a.slug === slug);

  return (
    <>
      <Transition>
        <Link
          href="/artistxs"
          className="rrss"
          style={{ width: "96px", marginBottom: "20px" }}
        >
          ← Volver
        </Link>
      </Transition>

      <div className="artistx">
        <div className="left">
          <Transition>
            <img src={`/${data?.thumb}`} />

            <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>RRSS</p>
            {data?.instagram && (
              <a className="rrss" href={data.instagram}>
                → instagram
              </a>
            )}
            {data?.soundcloud && (
              <a className="rrss" href={data.soundcloud}>
                → soundcloud
              </a>
            )}
            {data?.website && (
              <a className="rrss" href={data.website}>
                → website
              </a>
            )}
            {data?.linktree && (
              <a className="rrss" href={data.linktree}>
                → linktree
              </a>
            )}
            {data?.x && (
              <a className="rrss" href={data.x}>
                → x
              </a>
            )}
            {data?.youtube && (
              <a className="rrss" href={data.youtube}>
                → youtube
              </a>
            )}
          </Transition>
        </div>
        <div className="right">
          <Transition>
            <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
              <u>{data?.name}</u>
            </h2>
          </Transition>
          <Transition>
            <p dangerouslySetInnerHTML={{ __html: data?.bio }}></p>
            <br />
            <u>Track:</u> {data?.trackName}
            <br />
            <u>Ficha técnica:</u>
            <p dangerouslySetInnerHTML={{ __html: data?.ficha }}></p>
          </Transition>
        </div>
      </div>
    </>
  );
}
