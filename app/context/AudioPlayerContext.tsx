"use client";

import { createContext, useContext, ReactNode, useState, useRef } from "react";

export interface AudioTrack {
  path: string;
  artist: string;
  trackName: string;
  duration: number;
}

interface PlayerState {
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  progress: number;
}

interface AudioPlayerContextType {
  // Estados
  tracks: AudioTrack[];
  currentTrackIndex: number;
  playerState: PlayerState;
  audioRef: React.RefObject<HTMLAudioElement>;

  // Métodos
  setTracks: (tracks: AudioTrack[]) => void;
  loadTrack: (track: AudioTrack) => void;
  playTrack: () => void;
  pauseTrack: () => void;
  stopTrack: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  handleVolumeChange: (newVolume: number) => void;
  handleTimeUpdate: () => void;
  seekTo: (percentage: number) => void;
  track?: AudioTrack;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tracks, setTracks] = useState<AudioTrack[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    volume: 1,
    currentTime: 0,
    progress: 0,
  });

  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayerState((prev) => ({ ...prev, isPlaying: true }));
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState((prev) => ({ ...prev, isPlaying: false }));
    }
  };

  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayerState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
        progress: 0,
      }));
    }
  };

  const loadTrack = (track: { name: string }) => {
    console.log(tracks.findIndex((t) => t.trackName === track.name));
    setCurrentTrackIndex(tracks.findIndex((t) => t.trackName === track.name));
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setPlayerState((prev) => ({ ...prev, volume: newVolume }));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progress = (currentTime / duration) * 100;

      setPlayerState((prev) => ({
        ...prev,
        currentTime: currentTime * 1000,
        progress,
      }));
    }
  };

  const seekTo = (percentage: number) => {
    if (audioRef.current) {
      const time = (percentage / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setPlayerState((prev) => ({
        ...prev,
        currentTime: time * 1000,
        progress: percentage,
      }));
    }
  };

  const value = {
    tracks,
    currentTrackIndex,
    playerState,
    audioRef,
    setTracks,
    playTrack,
    pauseTrack,
    stopTrack,
    playNextTrack,
    playPreviousTrack,
    handleVolumeChange,
    handleTimeUpdate,
    seekTo,
    loadTrack,
    track: currentTrackIndex ? tracks[currentTrackIndex] : undefined,
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
