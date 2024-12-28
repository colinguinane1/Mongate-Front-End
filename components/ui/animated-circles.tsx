import OrbitingCircles from "./orbiting-circles";
import { DiMongodb, DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export function OrbitingCirclesHome() {
  return (
    <div className="relative flex h-80 w-80 flex-col items-center justify-center overflow-hidden bg-transparent rounded-lg ">
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={40}
      >
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.mongo />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
        reverse
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.react />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  mongo: () => <DiMongodb color="" />,
  express: () => <SiExpress size={20} />,
  node: () => <FaNode size={40} />,
  react: () => <DiReact size={40} />,
};
