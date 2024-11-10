import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional()
  })
});

const publications = defineCollection({
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string().optional(),
      date: z.string().optional(),
      publication: z.string().optional(),
      coauthors: z.string().optional()
    })
  )
});

const policyOpinion = defineCollection({
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string().optional(),
      date: z.string().optional(),
      publication: z.string().optional(),
      coauthors: z.string().optional()
    })
  )
});

const media = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string().optional(),
      date: z.string().optional(),
      publication: z.string().optional()
    })
  )
});

export const collections = { pages, publications, policyOpinion, media };
