import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import FadeInSection from "../fade-in";

export default function TechStackSection() {
  const techStack = [
    {
      name: "Node.JS",
      icon: (
        <FaNodeJs
          color="green"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "Unify your development with one programming language.",
    },
    {
      name: "React",
      icon: (
        <FaReact
          color="teal"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "The industry standard for web and mobile development.",
    },
    {
      name: "MongoDB",
      icon: (
        <DiMongodb
          color="green"
          className="w-16 h-16 motion-preset-oscillate-sm"
        />
      ),
      description: "Javascript for the web.",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-16 h-16 motion-preset-oscillate-sm" />,
      description: "RESTful API development made easy.",
    },
  ];
  return (
    <FadeInSection>
      <h1 className="text-4xl mt-20  text-center font-bold ">
        Why use this template?
      </h1>
      <div className=" grid grid-cols-1 z-[-1]   md:grid-cols-2 gap-4 p-4">
        {techStack.map((tech) => (
          <FadeInSection key={tech.name}>
            <div className="bg-primary/10 z-[-1] motion-preset-blur-up-lg w-full p-10 h-full flex md:flex-row flex-col gap-4 items-center justify-center rounded-lg">
              <div className="flex flex-col items-center justify-center">
                {tech.icon}
                <h1 className="font-bold py-4  text-2xl">{tech.name}</h1>
              </div>

              <p className="text-center">{tech.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
  );
}
