import { withSessionRoute } from "@/features/auth/handlers/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  request.session.destroy();

  response.end();
}
