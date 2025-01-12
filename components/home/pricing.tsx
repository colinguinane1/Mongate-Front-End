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
      tag: "Popular",
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
    <div className="grid place-content-center w-screen ">
      <div className="flex items-center max-w-6xl  mt-20 justify-center flex-col gap-4">
        <span className="bg-gradient-to-r text-3xl font-bold from-foreground to-foreground/45 bg-clip-text text-transparent">
          Pricing
        </span>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`${
                idx === 1
                  ? "bg- shadow-primary/10 border border-primary/20"
                  : ""
              }  relative p-10 h-full flex flex-col gap-4 border-foreground/30  border items-center justify-center rounded-lg shadow-lg   overflow-hidden`}
            >
              {idx === 1 && (
                <BorderTrail
                  className="bg-gradient-to-l opacity-20 from-foreground  to-primary "
                  size={200}
                />
              )}

              <div className="flex flex-col items-center justify-center relative z-10">
                {tech.tag && (
                  <p className="bg-primary/20 px-2 rounded-lg border border-secondary/30">
                    {tech.tag}
                  </p>
                )}
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
          ))}
        </div>
      </div>
    </div>
  );
}
