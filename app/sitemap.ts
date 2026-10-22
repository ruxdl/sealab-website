import type { MetadataRoute } from "next";
import { legalNav, site } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const main = ["", "/prestations", "/association", "/rejoindre", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const legalPages = legalNav.map((item) => ({
    url: `${site.url}${item.href}`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));
  return [...main, ...legalPages];
}
