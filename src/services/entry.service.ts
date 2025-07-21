import { createEntry } from '@/repositories/entry.repository';
import { getUserByClerkId } from '@/repositories/user.repository';
import { CreateEntry } from '@/schemas/entry.schema';
import { auth } from '@clerk/nextjs/server';

export const writeDiaryEntry = async (entry: CreateEntry) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error('Unauthorized!');

    const user = await getUserByClerkId(userId);

    if (!user) throw new Error('User not found');

    const newEntry = await createEntry(user.id, entry);
    return newEntry;
  } catch {
    return null;
  }
};
