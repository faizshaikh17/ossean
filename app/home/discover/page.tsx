'use client';
import React, { useState } from 'react';
import { signIn, useSession } from "@/lib/auth-client";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const { data: isPending } = useSession();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signIn.social(
        {
          provider: "google",
          callbackURL: "/home",
          errorCallbackURL: '/',
        },
        {
          onRequest: () => {},
          onResponse: () => {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          onError: () => {
            setLoading(false);
            window.location.href = '/';
          },
          onSuccess: () => {
            setLoading(false);
            setTimeout(() => {
              window.location.href = '/home';
            }, 500);
          }
        }
      );
    } catch {
      setLoading(false);
      window.location.href = '/';
    }
  };

  if (isPending) {
    return (
      <div className="flex w-full bg-black min-h-screen items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('/statue.png')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="h-6 w-6 rounded-full border-2 border-white/20 border-t-white animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-black relative px-4">
      <div className="absolute inset-0 bg-[url('/statue.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl bg-white/5">
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl font-light tracking-[0.25em] uppercase">
            Welcome
          </h1>
        </div>

        <button
          disabled={loading}
          onClick={handleSignIn}
          className="w-full h-12 bg-white/90 hover:bg-white text-black font-medium text-sm tracking-wide rounded-lg transition-all duration-300 border border-white/10 shadow-md hover:shadow-white/30 focus:outline-none flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-black rounded-full" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 262"
              className="group-hover:scale-105 transition-transform duration-300"
            >
              <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
              <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
              <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
              <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
            </svg>
          )}
          {loading ? 'Signing in...' : 'Continue with Google'}
        </button>

        <div className="text-center mt-10">
          <div className="w-16 h-px bg-white/20 mx-auto mb-4" />
          <p className="text-xs text-white/30 font-light tracking-[0.25em] uppercase">
            Secure Access
          </p>
        </div>
      </div>
    </div>
  );
}
