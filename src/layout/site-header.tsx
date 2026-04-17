"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "wed/layout/site-navigation";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-line bg-surface/90 px-4 py-3 shadow-[0_18px_50px_rgba(46,24,18,0.08)] backdrop-blur md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-center font-display text-[1.75rem] font-semibold tracking-[0.22em] text-[#3d241d] md:text-left"
          >
            B&amp;F
          </Link>

          <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-2">
            {navigationItems.map((item) => {
              const active = isActiveLink(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
                    active
                      ? "bg-[#3d241d] text-[#fff7ef]"
                      : "text-[#6e5449] hover:bg-[#efe2d3] hover:text-[#3d241d]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
