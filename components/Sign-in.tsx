'use client';
import React, { useState } from 'react';
import { signIn, useSession } from "@/lib/auth-client";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = useSession();

  // Remove the problematic useEffect that causes infinite loop
  // The middleware should handle redirecting logged-in users

  const handleSignIn = async () => {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Current URL:', window.location.href);
    console.log('All cookies before sign-in:', document.cookie);

    try {
      setLoading(true);
      const result = await signIn.social(
        {
          provider: "google",
          callbackURL: "/home",
          errorCallbackURL: '/auth',
        },
        {
          onRequest: () => {
            console.log('Sign-in request started');
          },
          onResponse: (response) => {
            console.log('Sign-in response received:', response);
            console.log('Response type:', typeof response);
            console.log('Response keys:', Object.keys(response || {}));
            console.log('All cookies after response:', document.cookie);
            
            // Force a page reload to trigger middleware
            setTimeout(() => {
              console.log('Forcing page reload...');
              window.location.reload();
            }, 1000);
          },
          onError: (error) => {
            console.error('Sign-in error:', error);
            setLoading(false);
          },
          onSuccess: (data) => {
            console.log('Sign-in successful:', data);
            console.log('All cookies after success:', document.cookie);
            setLoading(false);
            
            // Force redirect with page reload
            setTimeout(() => {
              console.log('Forcing redirect to /home...');
              window.location.href = '/home';
            }, 500);
          }
        }
      );
      console.log('SignIn result:', result);
    } catch (error) {
      console.error('Sign-in failed:', error);
      setLoading(false);
    }
  };

  // Debug function to check current state
  const debugState = () => {
    console.log('=== DEBUG STATE ===');
    console.log('Session:', session);
    console.log('Is pending:', isPending);
    console.log('Loading:', loading);
    console.log('All cookies:', document.cookie);
    console.log('Current URL:', window.location.href);
  };

  if (isPending) {
    return (
      <div className="flex w-full bg-black/40 min-h-screen items-center justify-center">
        <div className="absolute inset-0 z-5 bg-[url('/statue.png')] opacity-70 bg-cover bg-center pointer-events-none" />
        <div className="text-center z-10">
          <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto" />
          <p className="text-white mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full bg-black/40 min-h-screen items-center justify-center">
      <div className="absolute inset-0 z-5 bg-[url('/statue.png')] opacity-70 bg-cover bg-center pointer-events-none" />

      <div className="text-center z-10">
        {/* Debug button - remove in production */}
        <button
          onClick={debugState}
          className="mb-4 px-2 py-1 text-xs bg-gray-500 text-white rounded"
        >
          Debug State
        </button>

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

        {/* Show session info for debugging */}
        {session && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded text-xs">
            Logged in as: {session.user?.email}
          </div>
        )}
      </div>
    </div>
  );
}