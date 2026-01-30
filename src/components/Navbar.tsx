"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/aaen-logo.png"
            alt="AAEN Eiendom"
            width={220}
            height={80}
            className="h-11 w-auto md:h-12 object-contain"
            priority
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-semibold text-gray-900 tracking-tight">
              AAEN Eiendom
            </span>
            <span className="text-sm text-gray-500">Totalentreprenør i Bergen</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-brand-dark transition"
          >
            Gratis befaring
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100"
          aria-label="Meny"
          aria-expanded={open}
        >
          <span className="sr-only">Åpne meny</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-sm">
          <nav className="section-shell flex flex-col py-3 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-center bg-brand text-white font-semibold hover:bg-brand-dark"
            >
              Gratis befaring
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
