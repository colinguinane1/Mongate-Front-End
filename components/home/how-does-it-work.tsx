export default function HowDoesItWork() {
  return (
    <div className="flex flex-col items-center w-screen p-4 space-y-4">
      <p className="font-bold text-4xl">Getting Started</p>
      <p>Front End Repository</p>
      <code className="border p-2 bg-card rounded-lg w-80 overflow-x-auto whitespace-nowrap">
        git clone https://github.com/colinguinane1/MERN-Template-Front-End.git{" "}
      </code>
      <p>Back End Repository</p>
      <code className="border p-2 bg-card rounded-lg w-80 overflow-x-auto whitespace-nowrap">
        git clone https://github.com/colinguinane1/MERN-Template-Back-End.git{" "}
      </code>
    </div>
  );
}
