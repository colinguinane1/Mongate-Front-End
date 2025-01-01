import ScriptCopyBtn from "../ui/script-copy-btn";

export default function HowDoesItWork() {
  const customCommandMap = {
    Frontend:
      "git clone https://github.com/colinguinane1/MERN-Template-Front-End.git",
    Backend:
      "git clone https://github.com/colinguinane1/MERN-Template-Back-End.git",
  };
  return (
    <div className="flex flex-col items-center w-screen p-4 space-y-4">
      <p className="font-bold text-4xl">Getting Started</p>
      <p>Front End Repository</p>
      <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="false"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      ></ScriptCopyBtn>
    </div>
  );
}
