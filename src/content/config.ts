import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string().optional(),
});

const devotions = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.literal('Devotions'),
    bibleReference: z.string(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.literal('Articles'),
    tags: z.array(z.string()).optional(),
  }),
});

const CDINotes = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.literal('CDI Notes'),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const sermonNotes = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.literal('Sermon Notes'),
    author: z.string(),
    bibleReference: z.string(),
  }),
});

export const collections = {
  devotions,
  articles,
  sermonNotes,
};
