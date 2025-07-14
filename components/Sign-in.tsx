'use client';
import React, { useState, useEffect } from 'react';
import { signIn, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // Redirect silently if already logged in
  useEffect(() => {
    if (session && !isPending) {
      router.push("/home");
    }
  }, [session, isPending, router]);

  const handleSignIn = async () => {
    console.log("[AUTH] Sign-in button clicked");
    try {
      setLoading(true);

      await signIn.social({
        provider: "google",
        callbackURL: "/home",
      });


    } catch (err) {
      console.error("[AUTH] Sign-in error:", err);
      setLoading(false);
      // Only redirect on actual errors
      router.push("/auth");
    }
  };

  if (isPending) {
    return (
      <div className="flex w-full bg-black min-h-screen items-center justify-center">
        <div className="absolute inset-0 bg-[url('/statue.png')] opacity-[0.08] bg-cover bg-center pointer-events-none" />
        <div className="relative z-10">
          <div className="animate-spin h-4 w-4 border border-white/10 border-t-white/60 rounded-full mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full bg-black min-h-screen items-center justify-center">
      <div className="absolute inset-0 bg-[url('/statue.png')] opacity-70 bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 w-full max-w-[280px] mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-lg font-thin text-white/90 tracking-[0.4em] uppercase">Welcome</h1>
          <div className="w-8 h-px bg-white/20 mx-auto mt-6" />
        </div>

        <button
          disabled={loading}
          onClick={handleSignIn}
          className="w-full h-10 cursor-pointer bg-white/85 hover:bg-white/95 text-black font-light text-xs tracking-[0.15em] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none transition-all duration-700 ease-out border-0 shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2.5 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {loading ? (
            <div className="animate-spin h-3 w-3 border border-gray-600 border-t-black rounded-full" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 256 262"
              className="group-hover:scale-110 transition-transform duration-700 ease-out"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
          )}

          <span className="relative z-10">
            {loading ? 'Signing in' : 'Continue with Google'}
          </span>
        </button>

        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-white/10" />
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <div className="w-6 h-px bg-white/10" />
          </div>
          <p className="text-white/25 text-[10px] font-extralight tracking-[0.35em] uppercase">
            Secure Access
          </p>
        </div>
      </div>
    </div>
  );
}