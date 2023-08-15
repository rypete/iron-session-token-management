import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { NextApiHandler } from "next";
import { ironSessionOptions } from "../configs/ironSessionOptions";

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, ironSessionOptions);
}
