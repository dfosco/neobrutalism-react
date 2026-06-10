import { Outlet } from "react-router";
import { Toaster } from "@/lib/registry/ui/sonner";
import * as Tooltip from "@/lib/registry/ui/tooltip";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App() {
  return (
    <>
      <Toaster richColors />
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <Tooltip.Provider>
            <Outlet />
          </Tooltip.Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}
