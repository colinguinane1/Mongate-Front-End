import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import FadeInSection from "../fade-in";
import { BorderTrail } from "../ui/border-trail";
import { MdEmail } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { InView } from "../ui/in-view";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function Pricing() {
  const techStack = [
    {
      name: "Basic",
      pricing: "Free",
      description: "Secure encrypted authentication with JSON Web Tokens.",
      perks: [
        "Email Verification",
        "Password Encryption",
        "User Management",
        "Frontend w/Docs",
      ],
    },
    {
      name: "Pro",
      pricing: "$10",
      description: "Powered by Resend, all you need is an API Key.",
      perks: [
        "Email Verification",
        "Password Encryption",
        "User Management",
        "Frontend w/Docs",
      ],
    },

    {
      name: "Custom",
      pricing: "Contact Us",
      description: "Let's chat and see how I can help you.",
      perks: [
        "Email Verification",
        "Password Encryption",
        "User Management",
        "Frontend w/Docs",
      ],
    },
  ];
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid place-content-center w-screen ">
        <div className="flex items-center max-w-6xl  mt-20 justify-center flex-col gap-4">
          <span className="bg-gradient-to-r text-3xl font-bold from-foreground to-foreground/45 bg-clip-text text-transparent">
            Pricing
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
                <div
                  className={`${
                    idx === 1 &&
                    "bg- shadow-primary/10 border border-primary/30"
                  }  relative p-10 h-full flex flex-col gap-4 border-foreground/30 shadow-foreground/10 border items-center justify-center rounded-lg shadow-lg   overflow-hidden`}
                >
                  <div className="absolute w-16 h-16 bg-foreground rounded-full mix-blend-multiply filter blur-3xl"></div>
                  <div className="flex flex-col items-center justify-center relative z-10">
                    <h1 className="font-bold pt-4 text-center text-2xl">
                      {tech.name}
                    </h1>
                    <p>{tech.pricing}</p>
                  </div>

                  <p className="grid grid-cols-1 gap-2">
                    {tech.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2">
                        <Check />
                        {perk}
                      </div>
                    ))}
                  </p>
                  <Button variant={"outline"}>See More</Button>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </div>
    </InView>
  );
}
