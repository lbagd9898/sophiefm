import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Carousel from "./Carousel";

const ABOUT_QUERY = `*[_type == "about"][0]{ bio }`;

type AboutDocument = SanityDocument & {
  bio: string;
};

export async function About() {
  const about = await client.fetch<AboutDocument>(ABOUT_QUERY);

  return (
    <section className="relative grid w-full min-h-full bg-gradient-to-br from-white via-slate-200 to-white grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_2fr] items-center text-center">
      <div className="h-[50vh] lg:h-[60vh]">
        <Carousel></Carousel>
      </div>
      <div className="relative sm:my-5 md:p-5 z-10 flex flex-col gap-3 items-center justify-center w-full">
        {/* About Me card */}
        <div className="relative px-8 sm:px-12 py-10 md:rounded-2xl border border-purple-100 bg-white/40 backdrop-blur-md shadow-lg shadow-purple-100">
          {/* Corner accents */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-300 rounded-tl-md" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-300 rounded-tr-md" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-300 rounded-bl-md" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-300 rounded-br-md" />
          <h2 className="text-2xl sm:text-4xl animate-fall-in font-bold tracking-tight mb-5 bg-clip-text text-purple-900">
            About Me
          </h2>
          <p className="text-base sm:text-lg animate-fall-in leading-relaxed text-slate-600 whitespace-pre-wrap">
            {about?.bio}
          </p>

          {/* Skill icons */}
          <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-purple-100">
            {/* Sports Management */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2c0 0 2.5 4 2.5 10S12 22 12 22M12 2c0 0-2.5 4-2.5 10S12 22 12 22M2 12h20M4.5 6.5c2 1 4.5 1.5 7.5 1.5s5.5-.5 7.5-1.5M4.5 17.5c2-1 4.5-1.5 7.5-1.5s5.5.5 7.5 1.5"
                />
              </svg>
              <span className="text-xs text-slate-500 font-medium">
                Sports Management
              </span>
            </div>

            {/* Accessibility */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="4"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5m0 0l-3 5m3-5l3 5M9 10H6m12 0h-3"
                />
              </svg>
              <span className="text-xs text-slate-500 font-medium">
                Accessibility
              </span>
            </div>

            {/* Career Coaching */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 17l4-8 4 4 4-6 4 10"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21H3"
                />
              </svg>
              <span className="text-xs text-slate-500 font-medium">
                Career Coaching
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
