import { FC, useState } from "react";
import { useFormStatus } from "react-dom";
import { checkCode } from "../actions/checkCode";

function downloadURI(uri: string, name = "download") {
  var link = document.createElement("a");
  // If you don't know the name or want to use
  // the webserver default set name = ''
  link.setAttribute("download", name);
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export const Download: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { pending } = useFormStatus();
  const [error, setError] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setError(false);

    if (await checkCode(data.id as never, data.code as never)) {
      downloadURI("/consolas.zip");
      return;
    }
    setError(true);
  };

  return (
    <div className="overlay">
      <div className="download-window">
        <img
          src="/aventura/7c.png"
          height="100"
          style={{ marginTop: "-100px" }}
        />
        <div style={{ marginTop: "-50px" }}>
          <p>ingresa el codigo para descargar el extra</p>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="fields">
              <input name="id" type="password" placeholder="numero" required />
              <input name="code" type="password" placeholder="id" required />
            </div>
            <button
              className="button"
              disabled={pending as never}
              type="submit"
            >
              DESCARGAR
            </button>
            <button className="button" onClick={() => onClose()}>
              SALIR
            </button>

            {error && <div className="blink">ERROR! Intenta nuevamente</div>}
          </form>
        </div>
      </div>
    </div>
  );
};
