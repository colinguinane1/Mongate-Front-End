import ScriptCopyBtn from "../ui/script-copy-btn";

export default function HowDoesItWork() {
  const frontend = {
    Frontend:
      "git clone https://github.com/colinguinane1/MERN-Template-Front-End.git",
  };
  const backend = {
    Backend:
      "git clone https://github.com/colinguinane1/MERN-Template-Front-End.git",
  };
  return (
    <div className="flex flex-col w-screen items-center justify-center p-4 pb-20 space-y-4">
      <div className="flex flex-col gap-4  max-w-6xl">
        <p className="font-bold text-4xl">Getting Started</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="bg-foreground w-8 h-8 text-background font-extrabold text-2xl inline-flex items-center justify-center rounded-full">
              1.
            </h1>
            <p>Clone the repositories.</p>
          </div>
          <ScriptCopyBtn
            className="w-60"
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={frontend}
          ></ScriptCopyBtn>
          <ScriptCopyBtn
            className="w-60"
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={backend}
          ></ScriptCopyBtn>
        </div>
      </div>
    </div>
  );
}
