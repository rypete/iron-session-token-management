import { saveTokens } from "@/features/auth/handlers/saveTokens";
import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (!request.session.tokens) {
    return response.send(false);
  }

  return response.send(true);
}
