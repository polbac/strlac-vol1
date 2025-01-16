"use client";
import { useRef } from "react";
import { Thumb } from "../components/Thumb";

import { DATA } from "../data";
function shuffle<T>(array: Array<T>) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default function Artistxs() {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  return (
    <>
      <audio ref={audioRef1} controls className="hidden">
        <source src={"/artista-click.mp3"} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef2} controls className="hidden">
        <source src={"/carga-bio.mp3"} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="artistxs">
        {shuffle(DATA).map((artist, index) => (
          <div
            key={`artist-${index}`}
            onMouseEnter={() => audioRef1?.current?.play()}
            onClick={() => window?.current?.play()}
          >
            <Thumb slug={artist.slug} name={artist.name} image={artist.thumb} />
          </div>
        ))}
      </div>
    </>
  );
}
