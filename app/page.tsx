import { Header } from "./components/Header";
import { About } from "./components/About";
import { client } from "@/sanity/lib/client";
import { Experience } from "./components/Experience";

interface Job {
  _id: string;
  title: string;
  company: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export default async function Home() {
  const jobs: Job[] = await client.fetch(
    `*[_type == "job"] | order(startDate desc)`
  );
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col min-h-screen items-center bg-white dark:bg-black sm:items-start">
        <Header />
        <About />
        <Experience jobs={jobs} />
      </main>
    </div>
  );
}
