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
import Link from "next/link";

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
      button: (
        <Link href="/docs/getting-started">
          <Button className="w-full" variant={"outline"}>
            Get Started
          </Button>
        </Link>
      ),
    },
    {
      name: "Pro",
      tag: "Coming Soon...",
      pricing: "$10",
      description: "Powered by Resend, all you need is an API Key.",
      perks: [
        "Postgres Support",
        "Password Encryption",
        "User Management",
        "Frontend w/Docs",
      ],
      button: (
        <Link href="/account">
          <Button className="w-full" variant={"default"}>
            Click to show interest!
          </Button>
        </Link>
      ),
    },
  ];
  return (
    <div className="grid place-content-center w-screen ">
      <div className="flex items-center max-w-6xl  mt-20 justify-center flex-col gap-4">
        <span className="bg-gradient-to-r text-3xl font-bold from-foreground to-foreground/45 bg-clip-text text-transparent">
          Pricing
        </span>
        <div className="grid  grid-cols-1 w-screen md:w-fit  p-4 md:grid-cols-2 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`${
                idx === 1
                  ? "bg- shadow-primary/10 border border-primary/20"
                  : ""
              }  relative p-10 w-full h-full flex flex-col gap-4 border-foreground/30  border items-center justify-center rounded-lg shadow-lg   overflow-hidden`}
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
                <h1
                  className={`font-bold pt-4 text-center text-2xl ${
                    idx === 1 ? "text-primary" : "text-foreground/50"
                  }`}
                >
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
              {tech.button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
