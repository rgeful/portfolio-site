"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "More", path: "/more" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed opacity-70 top-4 left-4 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-neutral-900 rounded-lg border border-zinc-800"
      >
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/90 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`fixed left-0 top-0 h-screen w-48 p-8 pt-16 md:pt-8 flex flex-col z-40 transition-transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsOpen(false)}>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-xl font-semibold text-white">Saul</span>
        </Link>

        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 transition-colors ${
                    isActive
                      ? "text-green-500"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && "• "}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
