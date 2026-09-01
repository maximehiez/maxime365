import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import languagesJSON from "./src/config/language.json";
const { default_language } = config.settings;

const supportedLang = [...languagesJSON.map((lang) => lang.languageCode)];
const disabledLanguages = config.settings.disable_languages;

// Filter out disabled languages from supportedLang
const filteredSupportedLang = supportedLang.filter(
  (lang) => !disabledLanguages.includes(lang),
);

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://maxime.hiez.ca",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "ignore",
  // Astro 7 defaults to 'jsx', which strips whitespace between inline elements
  // and reflows justified text. `true` keeps Astro 4's HTML-aware compression.
  compressHTML: true,
  i18n: {
    locales: filteredSupportedLang,
    defaultLocale: default_language,
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: default_language,
        // @astrojs/sitemap expects a record of locale key -> BCP-47 tag.
        // Passing an array silently disabled sitemap generation entirely.
        locales: Object.fromEntries(
          filteredSupportedLang.map((lang) => [lang, lang]),
        ),
      },
      // The default language is served unprefixed at `/`, and `/fr/**` is a
      // byte-for-byte duplicate of it. Keep the duplicates out of the sitemap.
      filter: (page) => !page.includes(`/${default_language}/`),
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
    }),
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});
