import {MoonLoader as Loader} from "react-spinners";
import { useTheme } from "next-themes";
import {Oval} from "react-loader-spinner";
export default function Loading() {
  const { theme } = useTheme();
  return (
      <Oval
          visible={true}
          height="10"
          width="10"
          color={theme === "dark" ? "#fff" : "#000"}
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
      />
  );
}
