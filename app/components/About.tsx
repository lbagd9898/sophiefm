import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const ABOUT_QUERY = `*[_type == "about"][0]{ bio }`;

type AboutDocument = SanityDocument & {
  bio: string;
};

export async function About() {
  const about = await client.fetch<AboutDocument>(ABOUT_QUERY);

  return (
    <section className="relative flex w-full py-24 px-6 sm:px-10 flex-col items-center min-h-full justify-center text-center bg-white">
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl animate-fall-in font-bold tracking-tight text-slate-800 mb-8">
          About
        </h1>
        <div className="relative w-full px-8 sm:px-12 py-10 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm">
          {/* Corner accents */}
          <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-300 rounded-tl-md" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-300 rounded-tr-md" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-300 rounded-bl-md" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-300 rounded-br-md" />

          <p className="text-base sm:text-lg animate-fall-in leading-relaxed text-slate-600 whitespace-pre-wrap">
            {about?.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
