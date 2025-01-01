import ScriptCopyBtn from "../ui/script-copy-btn";

export default function HowDoesItWork() {
  const customCommandMap = {
    Frontend:
      "git clone https://github.com/colinguinane1/MERN-Template-Front-End.git",
    Backend:
      "git clone https://github.com/colinguinane1/MERN-Template-Back-End.git",
  };
  return (
    <div className="flex flex-col w-screen p-4 pb-20 space-y-4">
      <p className="font-bold text-4xl">Getting Started</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h1 className="bg-foreground w-8 h-8 text-background font-extrabold text-2xl inline-flex items-center justify-center rounded-full">
            1.
          </h1>
          <p>Clone the git repositories.</p>
        </div>
        <ScriptCopyBtn
          className="w-20"
          showMultiplePackageOptions={true}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={customCommandMap}
        ></ScriptCopyBtn>
      </div>
    </div>
  );
}
