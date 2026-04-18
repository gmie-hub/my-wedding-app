import Image from "next/image";
import Link from "next/link";
import { RSVP_URL } from "wed/data/site-links";

const highlightCards = [
  {
    title: "Our Story",
    href: "/our-story",
    src: "https://images.unsplash.com/photo-1769038936715-738ab99f1362?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    alt: "A close-up of hands exchanging rings in a dark, intimate setting.",
  },
  {
    title: "The Details",
    href: "/details",
    src: "https://images.unsplash.com/photo-1632929541783-b67da9cd462c?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    alt: "A still-life composition of pears on a plate styled on a linen surface.",
  },
  {
    title: "RSVP",
    href: RSVP_URL,
    src: "https://images.unsplash.com/photo-1767463551794-b78c924b98a1?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    alt: "Historic stone houses under a soft blue sky.",
  },
  {
    title: "Gift Us",
    href: "/registry",
    src: "https://images.unsplash.com/photo-1739952255298-ae1b2d1ce007?auto=format&fit=crop&fm=jpg&q=80&w=1200",
    alt: "A notepad and dried flowers arranged on a soft blue background.",
  },
] as const;

export default function HomeHighlightsSection() {
  return (
    <section className="bg-[#fcfaf6] px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[#efe4d8] bg-white px-4 py-4 shadow-[0_24px_70px_rgba(48,26,18,0.06)] sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {highlightCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative block overflow-hidden rounded-[0.9rem]"
            >
              <article className="relative aspect-[0.9] min-h-[20rem]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,11,8,0.16),rgba(17,11,8,0.28))]" />

                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div>
                    <p className="font-display text-[2rem] font-medium uppercase tracking-[0.02em] text-[#fffaf2] sm:text-[2.3rem]">
                      {card.title}
                    </p>
                    <span className="mx-auto mt-1 block h-px w-28 bg-[#f4ece0]/80 transition-all duration-300 group-hover:w-36" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
