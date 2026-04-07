import { JobCard } from "./JobCard";

export function Experience({ jobs }: { jobs: any[] }) {
  return (
    <section className="w-full bg-gradient-to-b from-slate-100 via-slate-50 to-white py-20 px-6 md:px-12">
      {/* Section heading */}
      <div className="animate-fall-in max-w-7xl mx-auto mb-12 flex flex-col gap-2">
        <p className="text-purple-500 text-xs font-semibold tracking-[0.2em] uppercase">
          Career
        </p>
        <h2 className="text-slate-800 text-3xl md:text-4xl font-bold tracking-tight">
          Experience
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full mt-1" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
}
