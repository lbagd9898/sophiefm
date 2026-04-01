function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function JobCard({ job }: { job: any }) {
  const start = formatDate(job.startDate);
  const end = job.current ? "Present" : formatDate(job.endDate);
  const dateRange = start ? `${start} – ${end}` : "";

  return (
    <div className="group relative flex flex-col gap-3 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-indigo-400/0 rounded-full" />

      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h3 className="text-slate-900 font-semibold text-lg leading-snug group-hover:text-purple-800 transition-colors duration-200">
            {job.title}
          </h3>
          {job.current && (
            <span className="shrink-0 text-xs font-medium text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">
              Current
            </span>
          )}
        </div>

        <p className="text-purple-700 font-medium text-sm tracking-wide">
          {job.company}
        </p>

        {dateRange && (
          <p className="text-slate-400 text-xs font-light tracking-wider uppercase mt-0.5">
            {dateRange}
          </p>
        )}
      </div>

      {/* Divider */}
      {job.description && (
        <div className="w-8 h-px bg-slate-200 rounded-full" />
      )}

      {/* Description */}
      {job.description && (
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">
          {job.description}
        </p>
      )}
    </div>
  );
}
