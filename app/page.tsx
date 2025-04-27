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
            {DATA.map((track) => (
              <Link
                className="trackField"
                /* onClick={() => onClickTrack(track as unknown as AudioTrack)} */
                href={`artistx/${track.slug}`}
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
        <div className="title">STRLC</div>
        <div className="img-container">
          <Link href={"/record"}>
            <img src="/home/logo.png" width="100%" />
          </Link>
        </div>
      </div>

      <div className="download" onClick={() => showDownload(true)}>
        <div className="title">DESCARGA</div>
        <div className="img-container">
          <img src="/download.svg" style={{ width: "30px", height: "30px" }} />
        </div>
      </div>

      {download && <Download onClose={() => showDownload(false)} />}
    </div>
  );
}
