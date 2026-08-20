// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Deployed as a GitHub Pages *project* site, which serves from a sub-path:
  //   https://bitsnpixs.github.io/nsrl-infrastructure/
  // `site` is the origin only; `base` is the repo sub-path that Astro prefixes
  // onto every generated asset and link.
  //
  // Moving to a custom domain later is a two-line change here — set
  // site: "https://your-domain.com" and base: "/" — plus a `public/CNAME`
  // file containing the bare domain.
  site: "https://bitsnpixs.github.io",
  base: "/nsrl-infrastructure",
});
