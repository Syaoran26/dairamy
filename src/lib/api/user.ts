import db from '../prisma';

export const createUser = async (user: {
  id: string;
  email_addresses: { email_address: string }[];
  first_name: string;
  last_name: string;
  image_url: string;
}) => {
  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.email_addresses[0]?.email_address || '',
        name: `${user.first_name} ${user.last_name}`.trim(),
        image: user.image_url || '',
      },
    });

    return newUser;
  } catch {
    return null;
  }
};
