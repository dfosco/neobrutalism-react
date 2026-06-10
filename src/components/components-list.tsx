import type { ComponentLink } from "@/lib/utils/navigation";

interface ComponentsListProps {
  componentLinks: ComponentLink[];
}

export default function ComponentsList({ componentLinks }: ComponentsListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
      {componentLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
