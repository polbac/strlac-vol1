import { Transition } from "./components/Transition";

export default function Home() {
  return (
    <div className="home">
      <Transition>
        <img
          src="/logo.png"
          width="500"
          style={{ margin: "auto", marginTop: "2rem", marginBottom: "2rem" }}
        />
      </Transition>

      <Transition>
        <div
          style={{ color: "white", marginBottom: "1rem", fontSize: "1.25rem" }}
        >
          <p>STRLC records (2025) Vol 1.1</p>
        </div>
      </Transition>

      <Transition>
        <div style={{ fontSize: "1.25rem" }}>
          <p>Angel Salazar - Último espéculo en la tierra</p>
          <p>Látigx - La escucha de un tallo</p>
          <p>SOMBRA - cinco cuestas</p>
          <p>BASURA - ZPNG 8</p>
          <p>LIXT - Études profanes n1. - Trampolim </p>
          <p>Omega33 - A Chillin thing.</p>
          <p>Catriel Nievas - AURAL </p>
          <p>MAQ - Memoria fonográfica. </p>
          <p>Javier Areal - aprieta, percute, martilla </p>
          <p>Salomé Rojas - Al fondo, el mundo se acaba lento </p>
          <p>Aleas - Alta Nocte Listo</p>
        </div>
      </Transition>
    </div>
  );
}
