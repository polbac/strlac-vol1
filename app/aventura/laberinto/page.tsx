"use client";

import Link from "next/link";

import { Transition } from "../../components/Transition";

export default function Strlac() {
  return (
    <Link href={"/aventura/heroe"} className="aventura-center">
      <Transition>
        <img src="/aventura/laberinto.png" />
      </Transition>
      <div className="flex" style={{ gap: "10px" }}>
        <div style={{ width: "33.33%" }}>
          No habrá nunca una puerta. Estás adentro y el alcázar abarca el
          universo y no tiene ni anverso ni reverso ni externo muro ni secreto
          centro. No esperes que el rigor de tu camino que tercamente se bifurca
          en otro, que tercamente se bifurca en otro, tendrá fin
        </div>
        <div style={{ width: "33.33%" }}>
          tendrá fin. Es de hierro tu destino como tu juez. No aguardes la
          embestida del toro que es un hombre y cuya extraña forma plural da
          horror a la maraña de interminable piedra entretejida. No existe. Nada
          esperes. Ni siquiera en el negro crepúsculo la fiera.
        </div>
        <div style={{ width: "33.33% " }}>
          <img height="200" src="/aventura/laberinto-heroe.png" />
        </div>
      </div>
    </Link>
  );
}
