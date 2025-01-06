export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="prose px-4 h-fit max-w-3xl">{children}</div>;
}
