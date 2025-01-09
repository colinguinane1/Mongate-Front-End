import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center w-screen my-4 gap-2 items-center h-16 border-t">
      <p className="">
        &copy; 2024{" "}
        <a href="https://mongate.io" className="text-primary">
          Mongate
        </a>{" "}
      </p>
      <p>
        {" "}
        brought to you by{" "}
        <Link className="underline" href="https://c-g.dev">
          Colin
        </Link>
      </p>
    </footer>
  );
}
