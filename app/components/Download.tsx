import { FC } from "react";

export const Download: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="download-window">
        <p>Ingresa el código para descargar el tesoro</p>
        <img src="tesoro.svg" width="100" height="100" />
        <input type="password" />
        <div className="button">DESCARGAR</div>
        <div className="button" onClick={() => onClose()}>
          SALIR
        </div>
      </div>
    </div>
  );
};
