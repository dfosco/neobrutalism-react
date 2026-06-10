"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface FieldErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  errors?: { message?: string }[];
}

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ className, children, errors, ...props }, ref) => {
    const messages = (errors ?? []).flatMap((error) => (error?.message ? [error.message] : []));
    const hasContent = children != null || messages.length > 0;

    if (!hasContent) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="alert"
        data-slot="field-error"
        className={cn("text-destructive text-sm font-normal", className)}
        {...props}
      >
        {children ? (
          children
        ) : messages.length === 1 ? (
          messages[0]
        ) : (
          <ul className="ml-4 flex list-disc flex-col gap-1">
            {messages.map((message, index) => (
              <li key={`${message}-${index}`}>{message}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

FieldError.displayName = "FieldError";

export { FieldError };
