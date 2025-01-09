import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { InfoIcon } from "lucide-react";

export default function CustomAlert({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Alert className=" text-base  gap-4">
      <InfoIcon size={24} />
      <p>{children}</p>
    </Alert>
  );
}
