import { NextApiRequest } from "next";

export function saveTokens(
  request: NextApiRequest,
  accessToken: string,
  refreshToken: string
) {
  request.session.tokens = {
    accessToken,
    refreshToken,
  };

  return request.session.save();
}
