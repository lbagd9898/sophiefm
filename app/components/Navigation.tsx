import Link from "next/link";

export function Navigation() {
  const linkClass = `
  relative text-white/55 text-[11px] font-semibold tracking-[0.18em] uppercase
  px-6 py-2 transition-colors duration-200 hover:text-white active:opacity-60
  after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-[1.5px]
  after:bg-white after:rounded-full after:transition-all after:duration-250
  hover:after:left-6 hover:after:right-6
`.trim();
  return (
    <nav className="top-0 left-0 right-0 flex items-center justify-center px-6 py-5">
      <div className="flex items-center gap-0 sm:gap-0">
        <Link href="/" className={linkClass}>
          Home
        </Link>
        <div className="hidden sm:block w-px h-3 bg-white/20" />
        <Link href="/services" className={linkClass}>
          Services
        </Link>
        <div className="hidden sm:block w-px h-3 bg-white/20" />
        <Link href="/contact" className={linkClass}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
