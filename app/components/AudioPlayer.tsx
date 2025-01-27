"use client";

import { useAudioPlayer } from "../context/AudioPlayerContext";

export const AudioPlayer = () => {
  const {
    track,
    tracks,
    currentTrackIndex,
    playerState,
    playTrack,
    pauseTrack,
  } = useAudioPlayer();

  return (
    <div className="player">
      <div className="controls">
        <div className="play" onClick={playTrack}>
          ▶
        </div>
        <div className="pause" onClick={pauseTrack}>
          ||
        </div>
      </div>
      <div className="playerTackName">
        {track?.trackName || "No track selected"}
      </div>
      <div className="bar">
        <div className="total"></div>
        <div className="played" style={{ width: `${playerState.progress}%` }} />
      </div>
    </div>
  );
};
