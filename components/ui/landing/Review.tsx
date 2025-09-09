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
      "name": "Manu Arora",
      "handle": "mannupaaji",
      "tweetUrl": "https://twitter.com/mannupaaji/status/1957363315455230275",
      "profileImage": "https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg",
      "content": "great UX, love it",
      "date": "August 18, 2025",
      "isVerified": true
    }
    ,
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
      profileImage: "https://pbs.twimg.com/profile_images/1948384156129566720/bodOvmVQ_400x400.jpg",
      content: "Looks good brother. Surely gonna use !! Loved the ui 🫡",
      date: "July 18, 2025",
      isVerified: false
    },
    {
      name: "BEEJ",
      handle: "op3kay",
      tweetUrl: "https://twitter.com/op3kay/status/1946133492385124397",
      profileImage: "https://pbs.twimg.com/profile_images/1952757539319246849/-m0L3_Sz_400x400.jpg",
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
      profileImage: "https://pbs.twimg.com/profile_images/1955986645083414530/TuSQgeNX_400x400.jpg",
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
    },
    {
      "name": "Aditya A.",
      "handle": "iamAdityaAnjana",
      "tweetUrl": "https://twitter.com/iamAdityaAnjana/status/1946272068607324318",
      "profileImage": "https://pbs.twimg.com/profile_images/1944402318729854976/SgGE8uXl_400x400.jpg",
      "content": "It's so freakin cool",
      "date": "July 18, 2025",
      "isVerified": true
    },
    {
      "name": "disha",
      "handle": "maidishahoon",
      "tweetUrl": "https://twitter.com/maidishahoon/status/1946410952318161048",
      "profileImage": "https://pbs.twimg.com/profile_images/1959707473130160128/_1V3XIxs_400x400.jpg",
      "content": "Very clean very helpful !!!! Thank youuu",
      "date": "July 19, 2025",
      "isVerified": true
    },


  ];


  return (
    <main className="relative w-full bg-black text-white flex flex-col items-center justify-center py-20">
      <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44  flex flex-col items-center justify-center">

        <div>
          <div className="flex flex-col mb-14 items-center justify-center gap-4">
            <header className="text-2xl flex flex-col items-center justify-center gap-3 sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit text-center">
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
              className="group w-full z-10 flex items-center justify-center transition-all duration-300 hover:scale-[1.0]"
            >
              <div className="relative h-full w-full backdrop-blur-xl bg-neutral-900/60 border border-white/[0.08] hover:border-white/[0.12] p-7 transition-all duration-300 hover:shadow-xl">

                <div className="absolute top-5 right-5 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col gap-5">

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-full p-[1px]">
                      <Image
                        src={tweet?.profileImage ?? '/statue.png'}
                        height={38}
                        width={38}
                        alt={tweet.handle}
                        className="rounded-full w-full h-full object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {tweet.name}
                        </span>
                        {tweet.isVerified && (
                          <span className="rounded-full inline-flex">
                            <Image
                              src="/premiumPng.png"
                              alt="Verified"
                              height={14}
                              width={14}
                              className="rounded-full"
                            />
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400 tracking-wide">
                        @{tweet.handle}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-200 font-medium leading-relaxed text-sm sm:text-base">
                    {tweet.content}
                  </p>

                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    {tweet.date}
                  </span>
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
