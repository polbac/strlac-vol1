"use client";

import { useEffect } from "react";
import { DATA } from "../../data";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAudioPlayer } from "@/app/context/AudioPlayerContext";

function generarCaosAleatorio(longitud = 30) {
  const caracteres = "!@#$%^&*()_+[]{}|;:',.<>?/\\-=~`1234567890";
  let resultado = "";

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indiceAleatorio];
  }

  return resultado;
}

function mapStringToThreePercentages(str: string) {
  // Crear un hash simple del string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convertir a entero de 32 bits
  }

  // Usar el hash como semilla para generar tres valores
  const rand1 = Math.abs((hash * 31) % 1000) / 1000;
  const rand2 = Math.abs((hash * 73) % 1000) / 1000;
  const rand3 = Math.abs((hash * 97) % 1000) / 1000;

  const total = rand1 + rand2 + rand3;

  const percent1 = Math.round((rand1 / total) * 100);
  const percent2 = Math.round((rand2 / total) * 100);
  let percent3 = 100 - percent1 - percent2; // Para asegurar que sume 100

  // Ajuste por redondeo (puede provocar ±1 de error)
  return [percent1, percent2, percent3];
}

export default function Artistxs() {
  const pathname = usePathname();

  const { loadTrack, playerState, tracks, currentTrackIndex } =
    useAudioPlayer();

  const slug = pathname.split("/")[2];
  const data = DATA.find((a) => a.slug === slug);
  const index = DATA.findIndex((a) => a.slug === slug);

  useEffect(() => {
    if (
      !playerState.isPlaying &&
      currentTrackIndex === undefined &&
      tracks.length > 0
    ) {
      const t = tracks.find((t) => t.path === slug);
      if (t) loadTrack(t);
    }
  }, [tracks, currentTrackIndex, playerState, slug]);

  const percent1 = mapStringToThreePercentages(data?.name as string);
  const percent2 = mapStringToThreePercentages(data?.trackName as string);
  const percent3 = mapStringToThreePercentages(data?.bio as string);

  return (
    <>
      <div className="flex" style={{ gap: "10px" }}>
        <div style={{ width: "25%" }}>
          <div>
            <Link href="/" className="window-title">
              ← Volver
            </Link>
          </div>
          <div style={{ marginTop: "10px" }}>
            <img src={`/${data?.thumb}`} />
          </div>
        </div>

        <div className="artistx-id window">
          <div className="window-title">ID</div>
          <div
            className="window-container"
            style={{ maxHeight: "24vh", overflow: "auto" }}
          >
            <p>
              <img src={`/detalle/ascii/${data?.slug}.png`} />
            </p>
            <p dangerouslySetInnerHTML={{ __html: data?.bio || "" }}></p>
          </div>
        </div>
      </div>

      <div className="flex" style={{ gap: "10px", marginTop: "10px" }}>
        <div className="artistx-id window" style={{ width: "50%" }}>
          <div className="window-title">Track ID</div>
          <div className="window-container">
            #00{index + 1} {data?.trackName}
            <div>/////////////////</div>
            <div>///</div>
            <div>{generarCaosAleatorio(data?.name!.length)}</div>
          </div>
        </div>

        <div className="window" style={{ width: "50%", padding: "1rem" }}>
          <div className="bio-bar">
            <div
              className="bio-bar-1"
              style={{ width: `${percent1[0]}%` }}
            ></div>
            <div
              className="bio-bar-2"
              style={{ width: `${percent1[1]}%` }}
            ></div>
            <div
              className="bio-bar-3"
              style={{ width: `${percent1[2]}%` }}
            ></div>
          </div>

          <div className="bio-bar">
            <div
              className="bio-bar-1"
              style={{ width: `${percent2[0]}%` }}
            ></div>
            <div
              className="bio-bar-2"
              style={{ width: `${percent2[1]}%` }}
            ></div>
            <div
              className="bio-bar-3"
              style={{ width: `${percent2[2]}%` }}
            ></div>
          </div>

          <div className="bio-bar">
            <div
              className="bio-bar-1"
              style={{ width: `${percent3[0]}%` }}
            ></div>
            <div
              className="bio-bar-2"
              style={{ width: `${percent3[1]}%` }}
            ></div>
            <div
              className="bio-bar-3"
              style={{ width: `${percent3[2]}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="flex"
        style={{
          gap: "10px",
          marginTop: "10px",
          width: "100%",
          height: "calc(38vh - 45px)",
        }}
      >
        <div
          className=""
          style={{
            width: "75%",

            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", width: "100%", gap: "10px" }}>
            <div className="window" style={{ width: "75%" }}>
              <div className="window-title">Contakto</div>
              <div
                className="window-container"
                style={{ position: "relative" }}
              >
                {data?.instagram && (
                  <a className="rrss" href={data.instagram}>
                    → instagram
                  </a>
                )}
                {data?.soundcloud && (
                  <a className="rrss" href={data.soundcloud}>
                    → soundcloud
                  </a>
                )}
                {data?.website && (
                  <a className="rrss" href={data.website}>
                    → website
                  </a>
                )}
                {data?.linktree && (
                  <a className="rrss" href={data.linktree}>
                    → linktree
                  </a>
                )}
                {data?.x && (
                  <a className="rrss" href={data.x}>
                    → x
                  </a>
                )}
                {data?.youtube && (
                  <a className="rrss" href={data.youtube}>
                    → youtube
                  </a>
                )}
              </div>
            </div>
            <div
              style={{
                width: "25%",
                background: `url(/detalle/textura2.png)`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "100%",
              background: `url(/detalle/textura1.png)`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              border: "1px solid #0afe53",
              flex: 1,
            }}
          ></div>
        </div>

        <div
          style={{
            width: "25%",
            border: "1px solid #0afe53",
            background: `url(/detalle/constelacion/${data?.slug}.png)`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "calc(36vh - 30px)",
          }}
        ></div>
      </div>
    </>
  );
}
