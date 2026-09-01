import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// About collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
    draft: z.boolean().optional(),
  }),
});

// Button schema (banner + call-to-action: label/link always present)
const buttonSchema = z.object({
  enable: z.boolean(),
  label: z.string(),
  link: z.string(),
});

// Button schema for features, where label/link may be omitted when disabled
const featureButtonSchema = z.object({
  enable: z.boolean(),
  label: z.string().optional(),
  link: z.string().optional(),
});

// Certification schema
const certificationSchema = z.object({
  logo: z.string(),
  manufacturer: z.string(),
  skill: z.string(),
  description: z.string(),
});

// Banner schema
const bannerSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
  button: buttonSchema,
  cert_title: z.string(),
  certifications: z.array(certificationSchema),
});

// Features schema
const featureSchema = z.object({
  title: z.string(),
  image: z.string(),
  content: z.string(),
  bulletpoints: z.array(z.string()),
  button: featureButtonSchema,
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: bannerSchema,
    features: z.array(featureSchema),
  }),
});

// Sections collection schema (call-to-action + testimonial)
const sectionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    button: buttonSchema.optional(),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          designation: z.string(),
          avatar: z.string(),
          content: z.string(),
        }),
      )
      .optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  contact: contactCollection,
  about: aboutCollection,
  homepage: homepageCollection,
  sections: sectionsCollection,
};
