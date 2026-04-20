import Image from "next/image";
import stadium from "@/public/stadium.jpeg";
import { sanityFetch } from "@/sanity/lib/live";

export default async function PhotoQuote() {
  const { data: quote } = await sanityFetch({
    query: `*[_type == "quote"][0]`,
  });
  return (
    <section className="relative flex p-10 justify-center items-start w-full h-[50vh] md:h-[40h] lg:h-[60vh]">
      <Image
        src={stadium}
        alt="Sophie at the Paris Olympics stadium"
        fill
        className="object-cover object-[50%_75%] md:object-[50%_65%] lg:object-[50%_75%]"
        priority
      />
      <div className="text-white inline-block text-center text-lg md:text-3xl lg:text-4xl z-10 backdrop-blur-sm bg-black/50 rounded-2xl px-6 py-4 whitespace-pre-wrap">
        {quote.quote}
      </div>
    </section>
  );
}
