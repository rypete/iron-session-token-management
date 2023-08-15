import { IronSessionOptions } from "iron-session";

export const ironSessionOptions: IronSessionOptions = {
  cookieName: "auth",
  password: process.env.SESSION_SECRET!,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
