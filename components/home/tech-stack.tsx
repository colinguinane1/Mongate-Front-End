import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import FadeInSection from "../fade-in";
import { BorderTrail } from "../ui/border-trail";
import { RiNextjsFill } from "react-icons/ri";
import { SiResend } from "react-icons/si";
import { InView } from "../ui/in-view";
import { InfiniteSlider } from "../ui/infinite-slider";

export default function TechStackSection() {
  const techStack = [
    {
      name: "Node.JS",
      icon: <FaNodeJs color="green" className="w-8 h-8" />,
      description: "Unify your development with one programming language.",
    },
    {
      name: "Next.JS",
      icon: <RiNextjsFill color="gray" className="w-8 h-8" />,
      description: "The industry standard for web and mobile development.",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb color="green" className="w-8 h-8" />,
      description: "Javascript for the web.",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-8 h-8" />,
      description: "RESTful API development made easy.",
    },
    {
      name: "Docker",
      icon: <FaDocker color="cyan" className="w-8 h-8" />,
    },
    { name: "Resend", icon: <SiResend className="w-8 h-8" /> },
  ];
  return (
    <div className="grid place-content-center w-screen ">
      <div className="flex items-center mt-20 max-w-6xl justify-center flex-col gap-4">
        <span className="bg-gradient-to-r text-3xl font-bold from-primary to-accent bg-clip-text text-transparent">
          Powered By
        </span>

        <InfiniteSlider>
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="relative z-[-1] p-4 h-full w-fit flex flex-col gap-4 items-center justify-center "
            >
              <div className="flex flex-col items-center justify-center">
                {tech.icon}
                <h1 className="font-bold pt-4 text-foreground/50 text-center">{tech.name}</h1>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
