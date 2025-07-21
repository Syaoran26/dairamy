import { z } from 'zod';

export const entrySchema = z.object({
  id: z.uuid(),
  collectionId: z.uuid().nullable(),
  userId: z.uuid(),
  title: z.string(),
  content: z.string(),
  mood: z.string(),
  moodScore: z.int(),
  moodImage: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const entryFormSchema = entrySchema.omit({ id: true, userId: true, createdAt: true, updatedAt: true });

export type Entry = z.infer<typeof entrySchema>;
export type CreateEntry = z.infer<typeof entryFormSchema>;
