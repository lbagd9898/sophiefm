export default function ContactCards() {
  return (
    <section className="relative w-full flex-1 bg-gradient-to-br from-white via-slate-200 to-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="animate-fall-in text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
          Let's connect
        </h1>
        <p className="animate-fall-in-delay-1 text-base sm:text-lg text-slate-500 leading-relaxed mb-10">
          Whether you have a question about sports management, accessibility, or
          career coaching — Sophie would love to hear from you.
        </p>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <a
            href="mailto:sophie@example.com"
            className="animate-fall-in-delay-2 contact-card flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#534AB7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 mb-0.5">Email</p>
              <p className="text-base font-medium text-slate-800">
                sophie@example.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/441234567890"
            className="animate-fall-in-delay-3 contact-card flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F6E56"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 mb-0.5">WhatsApp</p>
              <p className="text-base font-medium text-slate-800">
                Message Sophie
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+441234567890"
            className="animate-fall-in-delay-4 contact-card flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#993556"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18l-.08-1.08z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 mb-0.5">Phone</p>
              <p className="text-base font-medium text-slate-800">
                +44 1234 567 890
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sophiefuscomckeown/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fall-in-delay-5 contact-card flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#185FA5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 mb-0.5">LinkedIn</p>
              <p className="text-base font-medium text-slate-800">
                Sophie's profile
              </p>
            </div>
          </a>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
          <p className="text-sm text-slate-400">
            Usually responds within one working day
          </p>
        </div>
      </div>
    </section>
  );
}
