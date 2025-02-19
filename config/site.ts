export const siteConfig = {
  name: "nFlow",
  url: "https://nflow.vercel.app",
  ogImage: "https://nflow.vercel.app/icon.png ",
  description:
    "An AI Gmail client that helps you manage your inbox and keep track of your tasks.",
  links: {
    github: "https://github.com/colinguinane1/nFlow",
  },
  version: {
    front: "0.1.0",
    back: "0.1.0",
    state: "alpha",
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
