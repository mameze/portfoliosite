import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-white relative">
      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        <Image
          src="/478.jpg"
          alt="Steve"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />

        <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Contact Me</h1>
        <p className="text-lg mb-6">
          I’d love to hear from you! Reach out for collaborations, projects, or just a chat 🚀
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:skikuvi57@gmail.com"
              className="text-blue-300 hover:underline"
            >
              skikuvi57@gmail.com
            </a>
          </li>

          <li>
            📱 Mobile: <span className="text-green-400">+254 758 059 963</span>
          </li>

          <li>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/mameze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              github.com/mameze
            </a>
          </li>
        </ul>
      </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/254758059963"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
