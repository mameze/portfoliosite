import Image from "next/image";

export default function contact() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        {/* Profile Picture */}
        <Image
          src="/478.jpg"
          alt="Steve"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg mb-6">
          I’d love to hear from you! Reach out for collaborations, projects, or just a chat 🚀
        </p>

        {/* Links */}
        <ul className="space-y-4 text-lg">
          <li>
            📧 Email:{" "}
            <a
              href="skikuvi57@gmail.com"
              className="text-blue-300 hover:underline"
            >
              skikuvi57@gmail.com
            </a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
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
    </div>
  );
}
