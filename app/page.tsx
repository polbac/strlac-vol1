"use client";

import { useAudioPlayer } from "./context/AudioPlayerContext";
import { Transition } from "./components/Transition";
import { Download } from "./components/Download";
import { DATA } from "./data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { loadTrack, playerState, tracks, currentTrackIndex } =
    useAudioPlayer();

  const [download, showDownload] = useState(false);

  useEffect(() => {
    if (
      !playerState.isPlaying &&
      currentTrackIndex === undefined &&
      tracks.length > 0
    ) {
      loadTrack(tracks[0]);
    }
  }, [tracks, currentTrackIndex, playerState]);

  return (
    <div className="home">
      <div className="big-image">
        <Link href={"/aventura"}>
          <Transition>
            <img src="/home/home.png" width="100%" />
          </Transition>
        </Link>
      </div>
      <div className="tracks">
        <Transition>
          <div style={{ fontSize: "0.75rem" }}>
            <div className="trackField trackColumn">
              <div className="track">ARTISTX</div>
              <div className="trackName">ID</div>
              <div className="duration">DURACIÓN</div>
            </div>
            {DATA.map((track, index) => (
              <Link
                className="trackField"
                href={`artistx/${track.slug}`}
                key={`t-${index}`}
                style={{
                  color: currentTrackIndex === index ? "white" : "inherit",
                }}
              >
                <div className="track">{track.name}</div>
                <div className="trackName">{track.trackName}</div>
                <div className="duration">{track.length}</div>
              </Link>
            ))}
          </div>
        </Transition>
      </div>
      <div className="brand">
        <div className="title">OPCIONES</div>
        <div style={{ textAlign: "left" }}>
          <Link className="navmenu" href="/record" style={{ display: "block" }}>
            STRLAC
          </Link>
          <Link
            className="navmenu"
            href="#"
            onClick={() => showDownload(true)}
            style={{ display: "block" }}
          >
            DESCARGAS
          </Link>
          <Link
            className="navmenu"
            href="/aventura"
            style={{ display: "block" }}
          >
            ORACULOS
          </Link>
        </div>
      </div>
      {download && <Download onClose={() => showDownload(false)} />}
    </div>
  );
}
