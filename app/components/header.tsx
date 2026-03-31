import Image from "next/image";
import profilePic from "@/public/github.svg";

export function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-900 py-16 px-8 flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-8 max-w-4xl w-full">
        {/* Profile Picture */}
        <div className="animate-fall-in shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/30">
            <Image
              src={profilePic}
              alt="Sophie Fusco Mckeown"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
          <h1 className="animate-fall-in-delay-1 whitespace-nowrap text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Sophie Fusco Mckeown
          </h1>
          <h2 className="animate-fall-in-delay-2 text-purple-200 text-xl md:text-2xl font-light tracking-widest uppercase">
            Sports Management
          </h2>
        </div>
      </div>
    </header>
  );
}
