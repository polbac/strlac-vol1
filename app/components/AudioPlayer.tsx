"use client";

import { useAudioPlayer } from "../context/AudioPlayerContext";

export const AudioPlayer = () => {
  const {
    track,
    playerState,
    playTrack,
    pauseTrack,
    currentTime,
    duration,
    percent,
    onClickSeek,
    loaded,
    playNextTrack,
    playPreviousTrack,
    isPlaying,
  } = useAudioPlayer();
  console.log({ isPlaying });
  return (
    <div className="player">
      <div className="controls">
        <div className="" onClick={playPreviousTrack}>
          ←
        </div>
        {isPlaying ? (
          <div
            className="pause"
            onClick={pauseTrack}
            style={{
              fontSize: "14px",
              position: "relative",
              top: "10px",
              width: "14px",
            }}
          >
            ||
          </div>
        ) : (
          <div
            className="play"
            onClick={playTrack}
            style={{
              fontSize: "14px",
              position: "relative",
              top: "10px",
              width: "14px",
            }}
          >
            ▶
          </div>
        )}

        <div className="" onClick={playNextTrack}>
          →
        </div>
      </div>

      <div className="playerTackName">
        {track?.artist} -- {track?.trackName || "No track selected"}
      </div>

      <div className="bar">
        <div className="total">
          <span
            style={{
              color: "black",
              top: "3px",
              left: "5px",
              position: "absolute",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            {duration ? `${currentTime} / ${duration}` : ""}
          </span>
        </div>
        <div
          className="loaded"
          style={{
            width: `${loaded}%`,
            cursor: "pointer",
            background: "white",
            position: "absolute",
          }}
          onClick={onClickSeek}
        ></div>
        <div
          className="played"
          style={{ width: `${percent}%`, pointerEvents: "none" }}
        ></div>
      </div>
    </div>
  );
};
