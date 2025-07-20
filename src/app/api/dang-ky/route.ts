import { createUser } from '@/lib/api/user';

export async function POST(request: Request) {
  const body = await request.json();

  const user = await createUser(body.data);

  return Response.json(user);
}
