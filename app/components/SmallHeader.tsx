import { Navigation } from "./Navigation";

interface SmallHeaderProps {
  headers: {
    bigHeader: string;
    smallHeader?: string; // the ? makes it optional since you're checking headers.smallHeader &&
  };
}

export default function SmallHeader({
  headers,
}: {
  headers: SmallHeaderProps;
}) {
  return (
    <header className="w-full bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-900 flex flex-col items-center justify-center">
      <Navigation />
      <div className="flex flex-col mb-10 sm:flex-row items-center justify-center py-2 sm:py-4 px-6 sm:px-10 gap-5 sm:gap-7 w-full max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <h1 className="animate-fall-in text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            {headers.bigHeader}
          </h1>
          {headers.smallHeader && (
            <h2 className="animate-fall-in-delay-1 text-purple-200 text-sm sm:text-md md:text-lg font-light tracking-widest uppercase">
              {headers.smallHeader}
            </h2>
          )}
        </div>
      </div>
    </header>
  );
}
