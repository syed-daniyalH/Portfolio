import { useEffect } from "react";
import { PORTFOLIO_DATA } from "@/const";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  imagePath?: string;
  noindex?: boolean;
}

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, type?: string) {
  const selector = `link[rel="${rel}"]`;
  let tag = document.querySelector(selector) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);

  if (type) {
    tag.setAttribute("type", type);
  }
}

function upsertJsonLd(id: string, value: Record<string, unknown>) {
  let tag = document.getElementById(id) as HTMLScriptElement | null;

  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(value);
}

export default function Seo({
  title,
  description,
  canonicalPath,
  imagePath = "/og-image.svg",
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const currentUrl =
      canonicalPath && canonicalPath.startsWith("http")
        ? canonicalPath
        : new URL(canonicalPath ?? window.location.pathname, window.location.origin)
            .toString()
            .replace(/#.*$/, "")
            .replace(/\?[^#]*$/, "");
    const imageUrl = new URL(imagePath, window.location.origin).toString();

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "author", PORTFOLIO_DATA.personal.name);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large"
    );
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", PORTFOLIO_DATA.personal.name);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", currentUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", `${PORTFOLIO_DATA.personal.name} portfolio preview`);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "theme-color", "#070b14");
    upsertLink("canonical", currentUrl);
    upsertLink("icon", "/favicon.svg", "image/svg+xml");
    upsertLink("apple-touch-icon", "/favicon.svg", "image/svg+xml");

    upsertJsonLd("portfolio-person-jsonld", {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PORTFOLIO_DATA.personal.name,
      jobTitle: PORTFOLIO_DATA.personal.title,
      description,
      url: currentUrl,
      sameAs: [PORTFOLIO_DATA.personal.github, PORTFOLIO_DATA.personal.linkedin],
      email: `mailto:${PORTFOLIO_DATA.personal.email}`,
      telephone: PORTFOLIO_DATA.personal.phone,
      image: imageUrl,
    });
  }, [canonicalPath, description, imagePath, noindex, title]);

  return null;
}
