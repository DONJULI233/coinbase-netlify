import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    middlewares: [
      {
        apply: "serve",
        handler: (req, res, next) => {
          res.setHeader("X-Robots-Tag", "noindex, nofollow");
          next();
        },
      },
    ],
  },
});
