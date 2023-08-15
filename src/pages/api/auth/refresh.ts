import { saveTokens } from "@/features/auth/handlers/saveTokens";
import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  // Start oauth refresh flow

  await saveTokens(request, "new access token", "new refresh token");

  response.end();
}
