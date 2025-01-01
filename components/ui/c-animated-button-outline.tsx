import { ArrowRight } from "lucide-react";

import { ReactNode } from "react";

export default function CAnimatedButtonOutline({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-fit w-40 m-2 text-white">
      <button className="relative hover:rounded-lg px-5 py-2 text-foreground w-40 flex items-center justify-center  hover:shadow-[0_0_10px_3px_#ffffff] hover:text-background hover:scale-[1.02] active:scale-[0.98] font-bold  border-foreground border-b-2   overflow-hidden transition-all duration-200 group">
        {/* Default Text */}
        <span className="relative  z-10 flex items-center gap-2 transition-all duration-75  l">
          {children} <ArrowRight size={15} />
        </span>
        {/* Hovered Text */}
        <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 group-hover:translate-y-0 translate-y-full"></span>
        {/* Background Animation */}
        <div className="absolute top-full left-[-40%] w-[300%] h-[400%] hover:rounded-lg bg-foreground rotate-[-45deg] transition-all duration-300 group-hover:top-0 group-hover:left-[-160%] group-hover:w-[380%] group-hover:h-[800%]"></div>
      </button>
    </div>
  );
}
