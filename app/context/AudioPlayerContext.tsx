"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from "react";

import { DATA } from "../data";

const audio =
  typeof window !== "undefined"
    ? new Audio()
    : ({} as { play: () => void; src: "" });

export interface AudioTrack {
  path: string;
  artist: string;
  trackName: string;
  duration: number;
  file: string;
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
  /* audio: Audio; */
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const milliseconds = Math.floor((timeInSeconds % 1) * 100);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
};

const calculateProgress = (currentTime: number, duration: number): number => {
  return duration > 0 ? (currentTime / duration) * 100 : 0;
};

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
    setPlayerState((prev) => ({ ...prev, isPlaying: true }));
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

  const loadTrack = (_track: { trackName: string }) => {
    const t = tracks.find((t) => t.trackName === _track.trackName);
    setCurrentTrackIndex(
      tracks.findIndex((t) => t.trackName === _track.trackName)
    );
    console.log(t);
    if (t?.file) {
      audio.src = `/tracks/${t?.file}`;
      audio.play();
    }
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
    audio,
    track: currentTrackIndex !== 1 ? tracks[currentTrackIndex] : undefined,
  };

  useEffect(() => {
    return setTracks(
      DATA.map((t) => ({
        path: t.slug,
        artist: t.name,
        trackName: t.trackName,
        file: t.file || "",
        duration: t.duration || 0,
      }))
    );
  }, []);

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
