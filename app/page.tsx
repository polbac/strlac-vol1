"use client";
import { useAudioPlayer, AudioTrack } from "./context/AudioPlayerContext";
import { Transition } from "./components/Transition";
import { DATA } from "./data";

export default function Home() {
  const { loadTrack, currentTrackIndex } = useAudioPlayer();

  const onClickTrack = (track: AudioTrack) => {
    loadTrack(track);
  };

  return (
    <div className="home">
      <div className="flex space-between">
        <div>
          <img src="/green/uniko-1.jpg" width="250" />
        </div>
        <div className="flex-1">
          <Transition>
            <img
              src="/logo.png"
              width="500"
              style={{
                margin: "auto",
                marginTop: "2rem",
                marginBottom: "2rem",
                height: "20vh",
                width: "auto",
                maxWidth: "500px",
              }}
            />
          </Transition>
        </div>
        <div>
          <img src="/green/uniko-2.jpg" width="250" />
        </div>
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
              <div
                className="trackField"
                onClick={() => onClickTrack(track as unknown as AudioTrack)}
              >
                <div className="track">{track.name}</div>
                <div className="trackName">{track.trackName}</div>
                <div className="duration">{track.duration}MS</div>
              </div>
            ))}
          </div>
        </Transition>
      </div>

      <Transition>
        <div className="redes">
          <a
            target="_blank"
            className="rrss"
            href="https://strlacrecords.bandcamp.com/"
          >
            → bandcamp
          </a>
          <a
            target="_blank"
            className="rrss"
            href="https://www.instagram.com/strlacrecords/"
          >
            → instagram
          </a>
          <a
            target="_blank"
            className="rrss"
            href="https://soundcloud.com/strlac-records"
          >
            → soundcloud
          </a>
        </div>
      </Transition>
    </div>
  );
}
