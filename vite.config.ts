import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import generouted from "@generouted/react-router/plugin";
import path from "path";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/neobrutalism-react/" : "/",
  plugins: [react(), tailwindcss(), generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
