import Image from "next/image";
import stadium from "@/public/stadium.jpeg";
import { client } from "@/sanity/lib/client";

export default async function PhotoQuote() {
  const quote = await client.fetch(`*[_type == "quote"][0]`);
  return (
    <section className="relative flex p-10 justify-center items-start w-full h-[50vh] md:h-[40h] lg:h-[60vh]">
      <Image
        src={stadium}
        alt="Sophie at the Paris Olympics stadium"
        fill
        className="object-cover object-[50%_75%] md:object-[50%_65%] lg:object-[50%_75%]"
        priority
      />
      <div
        className="text-white text-lg md:text-3xl lg:text-4xl z-10 backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-4"
      >
        {quote.quote}
      </div>
    </section>
  );
}
