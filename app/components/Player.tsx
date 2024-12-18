"use client";
export const Player = () => (
  <div
    style={{
      position: "absolute",
      transform: "translateX(-50%)",
      left: "50%",
      zIndex: 9999999,
      top: "-20px",
    }}
  >
    <iframe
      style={{ border: 0, width: "100%", height: "42px" }}
      src="https://bandcamp.com/EmbeddedPlayer/album=1180539273/size=small/bgcol=333333/linkcol=ffffff/transparent=true/"
      seamless
    ></iframe>
  </div>
);
