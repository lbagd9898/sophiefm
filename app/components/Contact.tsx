import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactCards() {
  return (
    <div className="flex items-center justify-center pt-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-xl w-full text-center border border-purple-200 rounded-2xl p-6 bg-white/80 backdrop-blur-sm shadow-sm">
        {/* Intro text */}
        <p className="mt-2 text-gray-800 text-lg">
          Whether you have a question about sports management, accessibility, or
          career coaching — Sophie would love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="mt-10 space-y-4">
          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-4 p-4 rounded-2xl border border-purple-100 bg-white hover:bg-purple-50 hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <FaEnvelope className="text-xl text-purple-600" />
            <span className="text-gray-800 font-medium">your@email.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-purple-100 bg-white hover:bg-purple-50 hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <FaLinkedin className="text-xl text-purple-600" />
            <span className="text-gray-800 font-medium">LinkedIn Profile</span>
          </a>

          {/* WhatsApp / Phone */}
          <a
            href="https://wa.me/1234567890" // replace with real number (no + or spaces)
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <FaWhatsapp className="text-xl" />
            <span className="font-medium">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
