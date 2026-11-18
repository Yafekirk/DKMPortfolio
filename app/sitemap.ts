import { siteConfig } from "@/data/site";
import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/skills",
  "/projects",
  "/experience",
  "/resume",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
