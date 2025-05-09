"use client";

import Link from "next/link";
import { Transition } from "../../components/Transition";
export default function Strlac() {
  return (
    <Link href={"/"}>
      <div className="str-humanx-container">
        <div className="str-humanx">
          <Transition>
            <div className="humanx">
              <img src="/detalle/avatar/nico.png" />
            </div>
            <div className="texto">
              nicolas saganias (buenos aires 1988) es programador, desarrollador
              tecnológico y artista. miembro del colectivo artístico mutante
              AUTOBUZZ y de strlac records, net-label dedicado a la divulgación
              de nuevos horizontes sonoros. devoto del sonido, el código y
              hardware libre.
            </div>
          </Transition>
        </div>

        <div className="str-humanx">
          <Transition>
            <div className="humanx">
              <img src="/detalle/avatar/pol.png" />
            </div>
            <div className="texto">
              pablo G. bacchetta a.k.a polbac (almagro, 1985) es músico
              electrónico, dj y desarrollador de código. amante nostálgico del
              net art y defensor del open source.
            </div>
          </Transition>
        </div>

        <div className="str-humanx">
          <Transition>
            <div className="humanx">
              <img src="/detalle/avatar/faktor.png" />
            </div>
            <div className="texto">
              Facundo Suasnabar, también conocido como Faktor (Ushuaia, 1988),
              es un artista visual, compositor y desarrollador tecnológico.
              Estudió Composición Electroacústica y Artes Electrónicas. Es
              miembro del colectivo de arte sonoro AUTOBUZZ y curador del sello
              discográfico en línea Strlac Records, un colectivo mutante de arte
              sonoro y música experimental.
            </div>
          </Transition>
        </div>
      </div>
    </Link>
  );
}
