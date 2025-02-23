"use client";

import { useEffect } from "react";
import { Transition } from "../../components/Transition";
import { DATA } from "../../data";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAudioPlayer } from "@/app/context/AudioPlayerContext";

export default function Artistxs() {
  const pathname = usePathname();

  const { loadTrack, playerState, tracks, currentTrackIndex } =
    useAudioPlayer();

  const slug = pathname.split("/")[2];
  const data = DATA.find((a) => a.slug === slug);

  useEffect(() => {
    if (
      !playerState.isPlaying &&
      currentTrackIndex === undefined &&
      tracks.length > 0
    ) {
      const t = tracks.find((t) => t.path === slug);
      if (t) loadTrack(t);
    }
  }, [tracks, currentTrackIndex, playerState, slug]);

  return (
    <>
      <Transition>
        <Link
          href="/"
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
            <p dangerouslySetInnerHTML={{ __html: data?.bio || "" }}></p>
            <br />
            <u>Track:</u> {data?.trackName}
            <br />
            <u>Ficha técnica:</u>
            <p dangerouslySetInnerHTML={{ __html: data?.ficha || "" }}></p>
          </Transition>
        </div>
      </div>
    </>
  );
}
