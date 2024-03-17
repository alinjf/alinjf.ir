import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [rehypeHeadingIds],
    },
    site: "https://alinjf.ir",
    integrations: [
        sitemap(),
        tailwind(),
        mdx({
            rehypePlugins: [rehypeHeadingIds],
            remarkPlugins: [remarkToc],
        }),
    ],
});
