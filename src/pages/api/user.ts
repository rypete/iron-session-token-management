import { saveTokens } from "@/features/auth/handlers/saveTokens";
import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { getUserProfile } from "@/features/user/handlers/getUserProfile";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (!request.session.tokens) {
    return response.status(401).json({ message: "Unauthenticated" });
  }

  const { accessToken } = request.session.tokens;

  const user = await getUserProfile(accessToken);

  return response.json(user);
}
