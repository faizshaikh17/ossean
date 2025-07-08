'use client';
import React, { useState } from 'react';
import { signIn } from "@/lib/auth-client";



export default function Signin() {

  const [loading, setLoading] = useState(false);
  if (typeof window === "undefined") {
    console.log("✅ DATABASE_URL used:", process.env.DATABASE_URL);
  }

  const handleSignIn = async () => {
    console.log('Starting sign-in process...');
    try {
      await signIn.social(
        {
          provider: "google",
          callbackURL: "/home",
          errorCallbackURL: '/',
        },
        {
          onRequest: () => {
            console.log('Sign-in request started');
            setLoading(true);
          },
          onResponse: () => {
            console.log('Sign-in response received');
            setLoading(false);
          },
          onError: (error) => {
            console.error('Sign-in error:', error);
            setLoading(false);
          },
        }
      );
    } catch (error) {
      console.error('Sign-in failed:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full bg-black/40 min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-5 bg-[url('/statue.png')] opacity-50 bg-cover bg-center pointer-events-none" />

      <div className="text-center z-10">
        <button
          disabled={loading}
          onClick={handleSignIn}
          className="px-4 py-2.5 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 rounded-md shadow-sm"
        >
          {loading ? (
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 262"
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
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
}
