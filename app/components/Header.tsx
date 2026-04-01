import Image from "next/image";
import profilePic from "@/public/github.svg";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-900 flex flex-col items-center justify-center">
      <Navigation />
      <div className="flex flex-col mb-10 sm:flex-row items-center justify-center py-8 sm:py-14 px-6 sm:px-10 gap-5 sm:gap-7 w-full max-w-4xl">
        {/* Profile Picture */}
        <div className="animate-fall-in shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-white/30">
            <Image
              src={profilePic}
              alt="Sophie Fusco Mckeown"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left">
          <h1 className="animate-fall-in-delay-1 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Sophie Fusco Mckeown
          </h1>
          <h2 className="animate-fall-in-delay-2 text-purple-200 text-sm sm:text-md md:text-lg font-light tracking-widest uppercase">
            Sports Management & Career Coach
          </h2>
        </div>
      </div>
    </header>
  );
}
