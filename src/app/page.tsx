"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const text =
    "I’m an aspiring Systems Engineer, passionate about system programming and web development, and driven to turn ideas into reality through clean and efficient code. I enjoy working with backend technologies like Go and PHP (Laravel), while also exploring frontend tools such as React and Tailwind. With a strong focus on networking and cybersecurity, I specialize in penetration testing and security analysis, aiming to build secure, scalable systems and applications that bridge performance, reliability, and innovation.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: NodeJS.Timeout;

    const handleTyping = () => {
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (!isDeleting) {
            // typing forward
            if (i < text.length) {
              const newText = text.substring(0, i + 1);
              i++;
              return newText;
            } else {
              setIsDeleting(true);
              clearInterval(interval);
              return prev;
            }
          } else {
            // deleting backward
            if (i > 0) {
              const newText = text.substring(0, i - 1);
              i--;
              return newText;
            } else {
              setIsDeleting(false);
              clearInterval(interval);
              return "";
            }
          }
        });
      }, isDeleting ? 30 : 80); // faster deleting
    };

    handleTyping();

    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 text-white relative bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl">
        <Image
          src="/478.jpg"
          alt="Steve"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />

        <h1 className="text-5xl font-bold mb-4">Hi, I’m Steve 👋</h1>

        {/* Typing effect */}
        <p className="text-lg text-gray-300 mb-6 min-h-[2rem]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/stack"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Stack
          </a>

          <span className="px-4 py-2 rounded-lg bg-green-600 opacity-50 cursor-not-allowed">
            Projects
          </span>

          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
