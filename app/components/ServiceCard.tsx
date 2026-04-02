import Link from "next/link";

export function ServiceCard({ service }: { service: any }) {
  return (
    <div className="group relative flex flex-col gap-4 bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 overflow-hidden hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 h-full cursor-pointer">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500" />

      {/* Icon */}
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-purple-50 flex items-center justify-center text-xl lg:text-2xl">
        {service.icon ?? "✦"}
      </div>

      {/* Category badge */}
      {service.category && (
        <span className="text-[11px] lg:text-xs font-medium tracking-wide text-purple-800 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 w-fit">
          {service.category}
        </span>
      )}

      {/* Title */}
      <h3 className="text-base lg:text-xl font-medium text-slate-900 leading-snug">
        {service.title}
      </h3>

      <div className="h-px bg-slate-100" />

      {/* Bullet points */}
      {service.description?.length > 0 && (
        <ul className="flex flex-col gap-2 flex-1">
          {service.description.map((point: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-slate-500 text-sm lg:text-base leading-relaxed"
            >
              <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* CTA row */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        {service.price && (
          <span className="text-sm lg:text-base font-medium text-slate-900">
            {service.price}
          </span>
        )}
        <Link
          href="/contact"
          className="text-sm flex items-center justify-center gap-2 lg:text-sm font-medium text-purple-800 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 hover:bg-purple-100 transition-colors whitespace-nowrap"
        >
          Get in touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
