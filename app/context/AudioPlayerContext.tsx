"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import { DATA } from "../data";

const audio =
  typeof window !== "undefined"
    ? new Audio()
    : ({} as {
        play: () => void;
        src: "";
        pause: () => void;
        ontimeupdate: () => void;
        currentTime: number;
        duration: number;
        volume: number;
        buffered: { length: number; end: (v: number) => number };
        addEventListener: (event: string, fn: () => void) => void;
        removeEventListener: (event: string) => void;
        paused: boolean;
      });

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
  currentTrackIndex: number | undefined;
  playerState: PlayerState;

  // Métodos
  setTracks: (tracks: AudioTrack[]) => void;
  loadTrack: (track: AudioTrack) => void;
  playTrack: () => void;
  pauseTrack: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  track?: AudioTrack;
  currentTime?: string;
  duration?: string;
  loaded?: number;
  percent?: number;
  onClickSeek: (e: any) => void;
  isPlaying?: boolean;
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
  const [duration, setDuration] = useState<number>(0);
  const [loaded, setLoaded] = useState<number>(0);
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const [tracks, setTracks] = useState<AudioTrack[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<
    number | undefined
  >(undefined);
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    volume: 1,
    currentTime: 0,
    progress: 0,
  });

  const playTrack = () => {
    setPlayerState((prev) => ({ ...prev, isPlaying: true }));
    audio.play();
  };

  const pauseTrack = () => {
    audio.pause();
    setPlayerState((prev) => ({ ...prev, isPlaying: false }));
  };

  const loadTrack = (_track: { trackName: string }) => {
    const t = tracks.find((t) => t.trackName === _track.trackName);

    setCurrentTrackIndex(
      tracks.findIndex((t) => t.trackName === _track.trackName)
    );

    if (t?.file) {
      audio.src = `/audio/${t?.file}`;
      audio.volume = 0;
      audio.play();
    }
  };

  const playNextTrack = () => {
    if (currentTrackIndex === undefined) return;

    const index =
      currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0;

    loadTrack(tracks[index]);

    setPlayerState((prev) => ({ ...prev, isPlaying: true }));
  };

  const playPreviousTrack = () => {
    if (currentTrackIndex === undefined) return;
    const index =
      currentTrackIndex > 0 ? currentTrackIndex - 1 : tracks.length - 1;

    loadTrack(tracks[index]);
  };

  const onClickSeek = (e: any) => {
    const total = e.target.parentElement.offsetWidth;
    const position = e.nativeEvent.offsetX;

    const percent = (position * 100) / total;
    audio.currentTime = duration * (percent / 100);
  };

  const value = {
    tracks,
    currentTrackIndex,
    playerState,
    setTracks,
    playTrack,
    pauseTrack,
    playNextTrack,
    playPreviousTrack,
    loadTrack,
    currentTime: formatTime(currentPlay),
    duration: duration ? formatTime(duration) : "",
    track:
      currentTrackIndex !== undefined && currentTrackIndex !== undefined
        ? tracks[currentTrackIndex]
        : undefined,
    percent: calculateProgress(currentPlay, duration),
    onClickSeek,
    loaded,
    isPlaying: audio.paused ? false : true,
  };

  useEffect(() => {
    setTracks(
      DATA.map((t) => ({
        path: t.slug,
        artist: t.name,
        trackName: t.trackName,
        file: t.file || "",
        duration: t.duration || 0,
      }))
    );
  }, []);

  useEffect(() => {
    audio.ontimeupdate = () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;

      setCurrentPlay(currentTime);
      setDuration(duration);

      if (audio.buffered.length) {
        const loaded = (100 * audio.buffered.end(0)) / audio.duration;
        setLoaded(loaded);
      }
    };

    audio.addEventListener("ended", playNextTrack);

    return () => audio.removeEventListener("ended", playNextTrack);
  }, [audio, setCurrentPlay, setDuration, setLoaded, playNextTrack]);

  return (
    <>
      <AudioPlayerContext.Provider value={value}>
        {children}
      </AudioPlayerContext.Provider>
    </>
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
