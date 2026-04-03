"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden h-[50vh] relative h-full" ref={emblaRef}>
      <div className="flex h-full">
        <div className="flex-[0_0_100%] relative">
          <Image
            src="/carousel/commonwealth.jpeg"
            alt="Sophie at the Paris Olympics stadium"
            fill
            className="object-cover object-[50%_75%] md:object-[50%_65%] lg:object-[50%_75%]"
            priority
          />
        </div>
        <div className="flex-[0_0_100%] relative">
          <Image
            src="/carousel/wimbledon.jpeg"
            alt="Sophie at the Paris Olympics stadium"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-[50%_75%] md:object-[50%_65%] lg:object-[50%_75%]"
            priority
          />
        </div>
        <div className="flex-[0_0_100%] relative">
          <Image
            src="/carousel/womenseng.jpeg"
            alt="Sophie at the Paris Olympics stadium"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-[50%_60%] md:object-[50%_55%] lg:object-[50%_40%]"
            priority
          />
        </div>
        <div className="flex-[0_0_100%] relative">
          <Image
            src="/carousel/working.jpeg"
            alt="Sophie at the Paris Olympics stadium"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-[50%_70%] md:object-[50%_65%] lg:object-[50%_75%]"
            priority
          />
        </div>
      </div>

      {/* arrow buttons at bottom of carousel */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
        <button
          onClick={goToPrev}
          className="
      group relative w-10 h-10 rounded-full
      bg-white/30 backdrop-blur-sm
      border border-white/40
      flex items-center justify-center
      transition-all duration-200
      hover:bg-white/50
      active:scale-90 active:bg-white/60
      overflow-hidden
    "
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.2s infinite",
            }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="
      group relative w-10 h-10 rounded-full
      bg-white/30 backdrop-blur-sm
      border border-white/40
      flex items-center justify-center
      transition-all duration-200
      hover:bg-white/50
      active:scale-90 active:bg-white/60
      overflow-hidden
    "
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.2s infinite",
            }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4l4 4-4 4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
