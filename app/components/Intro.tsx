import Image from "next/image";
import { Transition } from "./Transition";
import NumberTicker from "../../components/ui/number-ticker";
export const Intro = () => (
  <div className="intro text-center">
    <Transition>
      <Image
        src={"/brand.png"}
        alt="srtlac"
        width={250}
        height={200}
        className="str-vol-1"
      />
      <NumberTicker value={100} className="text-white" />%
    </Transition>
  </div>
);
