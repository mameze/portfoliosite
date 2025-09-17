export default function Stack() {
  const categories = [
    {
      title: "Frontend",
      items: ["React & Next.js", "Tailwind CSS", "JavaScript / TypeScript"],
    },
    {
      title: "Backend",
      items: ["Golang (Go Fiber)", "PHP (Laravel)"],
    },
    {
      title: "Database",
      items: ["MySQL / MariaDB", "MongoDB"],
    },
    {
      title: "Tools & OS",
      items: ["Linux / Ubuntu", "Git & GitHub"],
    },
    {
      title: "Cybersecurity / Networking & Pentesting",
      items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl">
        {}
        <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          ⚡ My Tech Stack
        </h1>

        {}
        <p className="text-lg text-gray-300 mb-10 text-center">
          Here are the technologies I use across{" "}
          <span className="text-cyan-400">frontend</span>,{" "}
          <span className="text-purple-400">backend</span>,{" "}
          <span className="text-green-400">databases</span>,{" "}
          <span className="text-orange-400">tools</span>, and{" "}
          <span className="text-red-400">networking & security</span>.
        </p>

        {}
        <div className="space-y-4 text-lg">
          {categories.map((category, idx) => (
            <p key={idx} className="text-gray-200">
              <span className="font-bold text-cyan-300">{category.title}:</span>{" "}
              {category.items.join(", ")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
