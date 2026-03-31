import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import background from "@/public/about-background.jpg";

const ABOUT_QUERY = `*[_type == "about"][0]{ bio }`;

type AboutDocument = SanityDocument & {
  bio: string;
};

export async function About() {
  const about = await client.fetch<AboutDocument>(ABOUT_QUERY);

  return (
    <section className="relative flex w-full py-30 px-10 flex-col items-center min-h-full justify-center text-center">
      <Image
        src={background}
        alt="About background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl animate-fall-in font-bold tracking-tight mb-6">
          About
        </h1>
        <p className="text-lg animate-fall-in leading-relaxed opacity-80 whitespace-pre-wrap">
          {about?.bio}
        </p>
      </div>
    </section>
  );
}
