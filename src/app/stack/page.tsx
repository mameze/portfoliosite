export default function Stack() {
  const tech = [
    { name: "Go (Golang)", color: "bg-cyan-600" },
    { name: "Rust", color: "bg-orange-600" },
    { name: "PHP (Laravel)", color: "bg-purple-600" },
    { name: "JavaScript / TypeScript", color: "bg-yellow-400 text-black" },
    { name: "React & Next.js", color: "bg-blue-500" },
    { name: "Tailwind CSS", color: "bg-sky-400 text-black" },
    { name: "Linux / Ubuntu", color: "bg-gray-700" },
    { name: "Cybersecurity Tools", color: "bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          ⚡ My Tech Stack
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-10">
          These are the tools and technologies I use for{" "}
          <span className="text-cyan-400">system programming</span>,{" "}
          <span className="text-purple-400">backend development</span>, and{" "}
          <span className="text-red-400">cybersecurity</span>.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tech.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer ${item.color}`}
            >
              <span className="font-semibold text-lg drop-shadow-md">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
