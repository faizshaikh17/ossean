'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SquareArrowOutUpRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Review() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tweets = [
    {
      name: "Gruz",
      handle: "damnGruz",
      tweetUrl: "https://twitter.com/damnGruz/status/1946154785062674923",
      profileImage: "https://pbs.twimg.com/profile_images/1943308327573950466/qlQX0Xv0_400x400.jpg",
      content: "damn the UI",
      date: "July 18, 2025",
      isVerified: true
    },
    {
      name: "Divy",
      handle: "11_devvv",
      tweetUrl: "https://twitter.com/11_devvv/status/1946310463857258550",
      profileImage: "https://pbs.twimg.com/profile_images/1934191744612179968/aC3ZXQSw_400x400.jpg",
      content: "Looks good brother. Surely gonna use !! Loved the ui 🫡",
      date: "July 18, 2025",
      isVerified: false
    },
    {
      name: "BEEJ",
      handle: "op3kay",
      tweetUrl: "https://twitter.com/op3kay/status/1946133492385124397",
      profileImage: "https://pbs.twimg.com/profile_images/1941441532499828736/euGvJT1d_400x400.jpg",
      content: "well built",
      date: "July 18, 2025",
      isVerified: true
    },
    {
      name: "Tobi",
      handle: "rayidashraf",
      tweetUrl: "https://twitter.com/rayidashraf/status/1946474553016033602",
      profileImage: "https://pbs.twimg.com/profile_images/1915323511914336256/YZoU50OY_400x400.jpg",
      content: "Can we submit os projects on it?",
      date: "July 19, 2025",
      isVerified: false
    },
    {
      name: "Bikash",
      handle: "bikash1376",
      tweetUrl: "https://twitter.com/bikash1376/status/1946273689827242381",
      profileImage: "https://pbs.twimg.com/profile_images/1945475637344432129/VQafPx48_400x400.jpg",
      content: "Fk @ajeetunc this is dem good\nBtw how about putting infinity scroll",
      date: "July 18, 2025",
      isVerified: false
    },
    {
      name: "Rahul Roy Chowdhury",
      handle: "Rahulstark4",
      tweetUrl: "https://twitter.com/Rahulstark4/status/1946263441037230507",
      profileImage: "https://pbs.twimg.com/profile_images/1830336479815483392/MqGG4qM4_400x400.jpg",
      content: "Nice UI. Do add more open source projects please",
      date: "July 18, 2025",
      isVerified: false
    }
  ];


  return (
    <main className="relative w-full bg-black text-white flex flex-col items-center justify-center py-20">
      <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44  flex flex-col items-center justify-center">

        <div>
          <div className="flex flex-col mb-14 items-center justify-center gap-4">
            <header className="text-2xl flex flex-col items-center justify-center gap-2 sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit text-center">
              <h1 className="bg-gradient-to-r space-x-1 sm:space-x-2 text-white/90">
                <span>What</span>
                <span>People</span>
                <span>are</span>
                <span>Saying</span>
              </h1>
              <p className="text-neutral-400 font-medium leading-5 transition duration-300 text-sm sm:text-base">
                Real feedback from real developers <br /> see what the community is saying about Ossean.
              </p>
            </header>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 w-full">
          {tweets.map((tweet, idx) => (
            <Link
              key={idx}
              href={tweet.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full z-10 flex items-center justify-center bg-neutral-800/50 transition-all duration-300"
            >
              <div className="relative h-full w-full bg-gradient-to-b from-neutral-950 to-neutral-950/30 backdrop-blur-xl border border-white/[0.08] p-6 transition-all duration-700">
                <div className="absolute top-4 right-4 opacity-15">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-full">
                        <Image
                          src={tweet.profileImage}
                          height={40}
                          width={40}
                          alt={tweet.handle}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-white">{tweet.name}</span>
                          {tweet.isVerified && <Image src="/premiumPng.png" alt="pre" height={12} width={12} className="rounded-full bg-black" />}
                        </div>
                        <span className="text-[12px] text-neutral-500 tracking-wide">@{tweet.handle}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-300 font-medium leading-relaxed text-sm sm:text-base">
                    {tweet.content}
                  </p>

                  <span className="text-[10px] uppercase tracking-widest text-neutral-600">{tweet.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`mt-16 flex flex-col items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-neutral-400 font-medium text-sm sm:text-base text-center">
            Join hundreds of developers already using Ossean
          </p>

          <Link
            href="/auth"
            className="group relative px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get Started Today
            <SquareArrowOutUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
}
