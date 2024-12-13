"use client";
import { Thumb } from "../components/Thumb";

import { DATA } from "../data";

export default function Artistxs() {
  return (
    <div className="artistxs">
      {DATA.map((artist, index) => (
        <div key={`artist-${index}`}>
          <Thumb slug={artist.slug} name={artist.name} image={artist.thumb} />
        </div>
      ))}
    </div>
  );
}
