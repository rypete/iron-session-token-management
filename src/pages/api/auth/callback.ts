import { saveTokens } from "@/features/auth/handlers/saveTokens";
import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const accessToken = request.query.accessToken;
  const refreshToken = request.query.refreshToken;

  if (!accessToken || !refreshToken) {
    return response.status(400).json({ message: "Missing token" });
  }

  await saveTokens(request, accessToken as string, refreshToken as string);

  response.end();
}
