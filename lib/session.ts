import { auth } from "@/lib/auth";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
  try {
    const cookieStore = await cookies(); // Add await here
    const token = cookieStore.get("better-auth.session_token");

    if (!token) {
      console.warn("[AUTH] No session token cookie found");
      return null;
    }

    if (!token.value) {
      console.warn("[AUTH] Malformed or suspicious token:", token.value);
      return null;
    }

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      console.warn("[AUTH] Session token invalid or expired:", token.value);
      return null;
    }

    return session;
  } catch (error) {
    console.error("[AUTH] Error while validating session:", error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    redirect("/auth");
  }
  return session;
}

export async function requireGuest() {
  const session = await getSession();
  if (session) {
    redirect("/home");
  }
}