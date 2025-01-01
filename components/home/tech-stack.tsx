import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import FadeInSection from "../fade-in";
import { BorderTrail } from "../ui/border-trail";
import { RiNextjsFill } from "react-icons/ri";
import { SiResend } from "react-icons/si";

export default function TechStackSection() {
  const techStack = [
    {
      name: "Node.JS",
      icon: <FaNodeJs color="green" className="w-16 h-16" />,
      description: "Unify your development with one programming language.",
    },
    {
      name: "Next.JS",
      icon: <RiNextjsFill color="gray" className="w-16 h-16" />,
      description: "The industry standard for web and mobile development.",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb color="green" className="w-16 h-16" />,
      description: "Javascript for the web.",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-16 h-16" />,
      description: "RESTful API development made easy.",
    },
    {
      name: "Docker",
      icon: <FaDocker color="cyan" className="w-16 h-16" />,
    },
    { name: "Resend", icon: <SiResend className="w-16 h-16" /> },
  ];
  return (
    <FadeInSection>
      <div className="grid place-content-center w-screen ">
        <div className="flex items-center mt-20 max-w-6xl justify-center flex-col gap-4">
          <span className="bg-gradient-to-r text-3xl font-bold from-primary to-accent bg-clip-text text-transparent">
            Powered By
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 z-[-1]  gap-4 p-4 ">
            {techStack.map((tech, idx) => (
              <FadeInSection key={tech.name}>
                <div className="bg-primary/10 relative z-[-1] p-10 h-full flex flex-col gap-4 items-center justify-center rounded-lg shadow-lg shadow-primary/10 border  border-primary/30">
                  {/* <BorderTrail
                    className="bg-gradient-to-l opacity-20 from-foreground via-accent to-secondary "
                    delay={idx * 0.5}
                    size={100}
                  /> */}
                  <div className="absolute w-8  h-8 bg-foreground rounded-full mix-blend-multiply filter blur-3xl"></div>
                  <div className="flex flex-col items-center justify-center">
                    {tech.icon}
                    <h1 className="font-bold pt-4 text-center text-2xl">
                      {tech.name}
                    </h1>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
