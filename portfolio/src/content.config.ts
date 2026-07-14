import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Short tag shown as the card eyebrow, e.g. "DFT · Quantum ESPRESSO"
    method: z.string(),
    // Where this sits on your track: "thesis" | "computation" | "device" | "characterization"
    track: z.string(),
    date: z.coerce.date(),
    status: z.enum(["complete", "in progress", "planned"]).default("in progress"),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
