export default function CirclePageDivider() {
  return (
    <div className="relative mb-20">
      {" "}
      <div className="absolute  -mt-[0.5px] top-0  left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-secondary/20 "
          ></path>
        </svg>
      </div>
    </div>
  );
}
