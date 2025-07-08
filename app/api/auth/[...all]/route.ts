import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

if (typeof window === "undefined") {
  console.log("✅ DATABASE_URL used:", process.env.DATABASE_URL);
}


export const { GET, POST } = toNextJsHandler(auth);
