"use client";

import { useRef, FC } from "react";
import { Transition } from "./Transition";
import { TypeWriter } from "./TypeWriter";

const logo = `<pre>
                      ███████████████████████████████████████████████████████████████
   _____________  __   _____        ___  ___    __  _______  ___  ______   ___     ________      
  / __/_  __/ _ \\/ /  / ___/ ____  ( _ )( _ )  /  |/  / __ \\/ _ \\/ __/ /  / _ \\   /  _/  _/      
 _\\ \\  / / / , _/ /__/ /__  /___/ / _  / _  | / /|_/ / /_/ / // / _// /__/ // /  _/ /_/ /        
/___/ /_/ /_/|_/____/\\___/        \\___/\\___/ /_/  /_/\\____/____/___/____/\\___/  /___/___/  
                ████████████████████████████████████████████████████████████████
                             POWERED BY STRLC SYSTEMS

      </pre>`;

export const Intro: FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const ref = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  return (
    <div className="intro" ref={ref}>
      <Transition>
        <div
          style={{ transform: "scale(0.8)" }}
          dangerouslySetInnerHTML={{ __html: logo }}
        />
      </Transition>
      <TypeWriter text={"SYSTEM INITIALIZING..."} onComplete={checkScroll} />
      <TypeWriter
        text={"CPU: 8-BIT STRLC CX-88 @ 4.77 MHz"}
        delay={300}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"MEMORY: 128 KB OK"}
        delay={600}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"VIDEO: SUPER VGA 320X240 MODE"}
        delay={1100}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"STORAGE: 2X FLOPPY DRIVE, 1X HARD DRIVE (20 MB)"}
        delay={1200}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"IO PORTS: SERIAL: OK   PARALLEL: OK"}
        delay={1900}
        onComplete={checkScroll}
      />
      <br />
      <br />
      <TypeWriter text={"."} delay={2000} onComplete={checkScroll} />
      <div className="flex">
        <TypeWriter
          text={"CHECKING KEYBOARD..."}
          delay={2100}
          onComplete={checkScroll}
        />
        <TypeWriter text={"OK"} delay={2500} onComplete={checkScroll} />
      </div>
      <div className="flex">
        <TypeWriter
          text={"CHECKING FLOPPY DRIVE A:..."}
          delay={2600}
          onComplete={checkScroll}
        />
        <TypeWriter text={"OK"} delay={2800} onComplete={checkScroll} />
      </div>
      <div className="flex">
        <TypeWriter
          text={"CHECKING HARD DRIVE..."}
          delay={2800}
          onComplete={checkScroll}
        />
        <TypeWriter text={"OK"} delay={3000} onComplete={checkScroll} />
      </div>

      <div className="flex">
        <TypeWriter
          text={"CHECKING RTC MODULE..."}
          delay={3100}
          onComplete={checkScroll}
        />
        <TypeWriter text={"OK"} delay={3300} onComplete={checkScroll} />
      </div>

      <br />
      <br />
      <TypeWriter
        text={"LOADING STRLC-BIOS V3.1..."}
        delay={3400}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"SYSTEM READY."}
        delay={3600}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"INSERT SYSTEM DISK OR TYPE COMMAND TO BEGIN."}
        delay={3800}
        onComplete={checkScroll}
      />
      <br />
      <br />
      <TypeWriter
        text={"> LOAD A:COMP_VOL_1.1"}
        delay={3800}
        onComplete={checkScroll}
      />
      <br />
      <br />
      <TypeWriter
        text={"ACCESSING DRIVE A:..."}
        delay={4100}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"PROGRAM: COMP_VOL_1.1"}
        delay={4300}
        onComplete={checkScroll}
      />
      <TypeWriter text={"VERSION: 1.1"} delay={4400} onComplete={checkScroll} />
      <TypeWriter text={"SIZE: 34 KB"} delay={4500} onComplete={checkScroll} />
      <TypeWriter
        text={"LOADING FILES:"}
        delay={4600}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"───────────────────────────────────────"}
        delay={4600}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[  OK  ] COMPVOL.EXE"}
        delay={4700}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[  OK  ] CONFIG.DAT"}
        delay={4800}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[  OK  ] COMPVOL.MAP"}
        delay={4900}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[  OK  ] HELP.TXT"}
        delay={5000}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[  OK  ] INIT.SYS"}
        delay={5100}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"───────────────────────────────────────"}
        delay={5200}
        onComplete={checkScroll}
      />
      <br />
      <br />
      <TypeWriter
        text={"LOADING... PLEASE WAIT"}
        delay={5300}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[#####               ] 20%"}
        delay={5400}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[##########          ] 50%"}
        delay={5500}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[###############     ] 75%"}
        delay={5600}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"[####################] 100%"}
        delay={5700}
        onComplete={checkScroll}
      />

      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <TypeWriter
          text={"██████████████████████████████████████████████████"}
          delay={5800}
          onComplete={checkScroll}
        />
        <TypeWriter
          text={"STRUCTURE VOLUME CONTROLLER"}
          delay={5900}
          onComplete={checkScroll}
        />
        <TypeWriter
          text={"██████████████████████████████████████████████████"}
          delay={6000}
          onComplete={checkScroll}
        />
        <TypeWriter
          text={"COPYRIGHT (C) 1987 STRLC"}
          delay={6100}
          onComplete={checkScroll}
        />
      </div>

      <TypeWriter
        text={"SYSTEM STATUS: ONLINE"}
        delay={6200}
        onComplete={checkScroll}
      />
      <TypeWriter
        text={"INITIALIZING MODULES... DONE."}
        delay={6300}
        onComplete={checkScroll}
      />

      <TypeWriter
        text={"CONNECTING TO PERIPHERALS... DONE."}
        delay={6400}
        onComplete={onComplete}
      />
    </div>
  );
};
