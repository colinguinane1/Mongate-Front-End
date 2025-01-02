import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import FadeInSection from "../fade-in";
import { BorderTrail } from "../ui/border-trail";
import { MdEmail } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { InView } from "../ui/in-view";

export default function WhyUseSection() {
  const techStack = [
    {
      name: "Secure User Authentication",
      icon: <FaUserLock className="w-16 h-16" />,
      description: "Secure encrypted authentication with JSON Web Tokens.",
    },
    {
      name: "Email Verification",
      icon: <MdEmail className="w-16 h-16" />,
      description: "Powered by Resend, all you need is an API Key.",
    },

    {
      name: "Easy Deployment",
      icon: <CiCircleCheck className="w-16 h-16" />,
      description: "Deploy in seconds with docker.",
    },
  ];
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="grid place-content-center w-screen ">
        <div className="flex items-center max-w-6xl  mt-20 justify-center flex-col gap-4">
          <span className="bg-gradient-to-r text-3xl font-bold from-primary to-accent bg-clip-text text-transparent">
            Features
          </span>
          <div className="grid grid-cols-1  z-[-1] md:grid-cols-3 gap-6 p-4  ">
            {techStack.map((tech, idx) => (
              <InView
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="bg-primary/10  relative p-10 h-full flex flex-col gap-4 items-center justify-center rounded-lg shadow-lg shadow-primary/10 border border-primary/30 overflow-hidden">
                  <div className="absolute w-16 h-16 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
                  <div className="flex flex-col items-center justify-center relative z-10">
                    {tech.icon}
                    <h1 className="font-bold pt-4 text-center text-2xl">
                      {tech.name}
                    </h1>
                  </div>

                  <p className="text-center max-w-40 text-foreground/50 relative z-10">
                    {tech.description}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </div>
    </InView>
  );
}
