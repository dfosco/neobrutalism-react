import { Button } from "@/lib/registry/ui/button";
import { badgeVariants } from "@/lib/registry/ui/badge";
import { ArrowRightIcon } from "lucide-react";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
    openInNewTab?: boolean;
  };
  secondaryCta: {
    text: string;
    href: string;
    openInNewTab?: boolean;
  };
}

export default function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <div className="mx-auto w-full px-2">
      <div className="3xl:max-w-screen-2xl mx-auto flex max-w-350 flex-col items-center gap-2 px-4 py-8 text-center md:py-16 lg:px-8 lg:py-20 xl:gap-4">
        <a
          className={badgeVariants({ variant: "outline", class: "bg-transparent" })}
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="size-2 rounded-full bg-black dark:bg-white" />
          Based on shadcn/ui
          <ArrowRightIcon />
        </a>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] xl:text-5xl xl:tracking-tighter">
          {title}
        </h1>
        <p className="max-w-3xl text-balance sm:text-lg">{description}</p>
        <div className="flex w-full flex-row items-center justify-center gap-2 pt-2">
          <Button
            size="sm"
            href={primaryCta.href}
            target={primaryCta.openInNewTab ? "_blank" : undefined}
            rel={primaryCta.openInNewTab ? "noopener noreferrer" : undefined}
          >
            {primaryCta.text}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            href={secondaryCta.href}
            target={secondaryCta.openInNewTab ? "_blank" : undefined}
            rel={secondaryCta.openInNewTab ? "noopener noreferrer" : undefined}
          >
            {secondaryCta.text}
          </Button>
        </div>
      </div>
    </div>
  );
}
