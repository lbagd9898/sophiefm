import { Header } from "./components/header";
import { About } from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col min-h-screen items-center bg-white dark:bg-black sm:items-start">
        <Header />
        <About />
      </main>
    </div>
  );
}
