import * as IronSession from "iron-session";

declare module "iron-session" {
  interface IronSessionData {
    tokens: {
      refreshToken: string;
      accessToken: string;
    };
  }
}
