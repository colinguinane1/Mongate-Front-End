import { PulseLoader } from "react-spinners";
import { useTheme } from "next-themes";
export default function Loading() {
  const { theme } = useTheme();
  return (
    <div>
      <PulseLoader color={theme === "dark" ? "white" : "black"} size={8} />
    </div>
  );
}
