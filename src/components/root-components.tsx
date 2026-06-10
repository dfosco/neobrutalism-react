import * as React from "react";
import { Link } from "react-router";

/**
 * Homepage component showcase.
 * This is a placeholder for the full component showcase.
 */
export default function RootComponents() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <p className="text-muted-foreground">Component showcase coming soon.</p>
      <Link to="/stickersheet" className="text-sm underline underline-offset-4">
        Browse all components →
      </Link>
    </div>
  );
}
