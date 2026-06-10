import * as React from "react";

import { Button } from "@/lib/registry/ui/button";
import { Textarea } from "@/lib/registry/ui/textarea";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
