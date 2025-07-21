import { signUp } from '@/services/user.service';

export async function POST(request: Request) {
  const body = await request.json();

  const user = await signUp(body.data);

  return Response.json(user);
}
