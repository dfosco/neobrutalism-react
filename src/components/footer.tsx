export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-center px-4 xl:h-24 xl:px-6">
      <span className="text-center text-xs text-muted-foreground sm:text-sm">
        Based on{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </a>
        .
      </span>
    </footer>
  );
}
