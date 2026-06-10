import * as React from "react";
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={{
        "--normal-bg": "var(--color-popover)",
        "--normal-text": "var(--color-popover-foreground)",
        "--normal-border": "var(--color-border)",
      } as React.CSSProperties}
      toastOptions={{
        classNames: {
          toast: "border! border-border! shadow-md!",
        },
      }}
      icons={{
        loading: <Loader2Icon className="size-4 animate-spin" />,
        success: <CircleCheckIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
      }}
      {...props}
    />
  );
};
Toaster.displayName = "Toaster";

export default Toaster;
export { Toaster };
