import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  // Start provider login flow

  response.redirect(
    "/api/auth/callback?accessToken=accesstoken123&refreshToken=refreshtoken456"
  );
}
