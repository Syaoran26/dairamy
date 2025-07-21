import { db } from '@/lib/prisma';

export const createUser = (data: { clerkUserId: string; email: string; name: string; image: string }) =>
  db.user.create({ data });

export const getUserByClerkId = (id: string) => db.user.findUnique({ where: { clerkUserId: id } });
