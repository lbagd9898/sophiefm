import { Navigation } from "./Navigation";

export default function SmallHeader() {
  return (
    <header className="w-full bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-900 flex flex-col items-center justify-center">
      <Navigation />
      <div className="flex flex-col mb-10 sm:flex-row items-center justify-center py-2 sm:py-4 px-6 sm:px-10 gap-5 sm:gap-7 w-full max-w-4xl">
        <div className="animate-fall-in flex flex-col items-center gap-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Services
          </h1>
          <h2 className="text-purple-200 text-sm sm:text-md md:text-lg font-light tracking-widest uppercase">
            Sports Management | Career Advising
          </h2>
        </div>
      </div>
    </header>
  );
}
