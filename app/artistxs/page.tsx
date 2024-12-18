"use client";
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
  return (
    <div className="artistxs">
      {shuffle(DATA).map((artist, index) => (
        <div key={`artist-${index}`}>
          <Thumb slug={artist.slug} name={artist.name} image={artist.thumb} />
        </div>
      ))}
    </div>
  );
}
