import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/lib/registry/ui/sonner";
import * as Tooltip from "@/lib/registry/ui/tooltip";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getComponentLinks } from "@/lib/utils/navigation.server";
import { buildSidebarNavLinks } from "@/lib/utils/navigation";

export const metadata: Metadata = {
  title: "Neobrutalism Design System",
  description:
    "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const componentLinks = await getComponentLinks();
  const sidebarNavLinks = buildSidebarNavLinks(componentLinks);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          <div className="flex min-h-svh flex-col">
            <Header sidebarNavLinks={sidebarNavLinks} componentLinks={componentLinks} />
            <main className="flex flex-1 flex-col">
              <Tooltip.Provider>{children}</Tooltip.Provider>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
