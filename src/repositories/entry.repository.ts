import { db } from '@/lib/prisma';
import { CreateEntry } from '@/schemas/entry.schema';

export const createEntry = (userId: string, data: CreateEntry) => db.entry.create({ data: { ...data, userId } });
