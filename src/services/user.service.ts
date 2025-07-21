import { createUser, getUserByClerkId } from '@/repositories/user.repository';

export const signUp = async (user: {
  id: string;
  email_addresses: { email_address: string }[];
  first_name: string;
  last_name: string;
  image_url: string;
}) => {
  if (!user) {
    return null;
  }

  const createdUser = await getUserByClerkId(user.id);

  if (createdUser) {
    return false;
  }

  await createUser({
    clerkUserId: user.id,
    email: user.email_addresses[0]?.email_address || '',
    name: `${user.first_name} ${user.last_name}`.trim(),
    image: user.image_url,
  });

  return true;
};
