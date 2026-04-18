import Image from "next/image";
import Link from "next/link";

const finaleImage =
  "https://images.unsplash.com/photo-1772453609524-fa1d206482d7?auto=format&fit=crop&fm=jpg&q=80&w=1800";

export default function HomeFinaleSection() {
  return (
    <section className="bg-[#fcfaf6] px-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-t-[2.3rem] border border-b-0 border-[#ded5c4]">
        <div className="relative min-h-[35rem] overflow-hidden sm:min-h-[39rem]">
          <Image
            src={finaleImage}
            alt="Delicate flowers arranged in glass bottles on a softly lit table."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,55,31,0.2),rgba(29,33,19,0.4)),linear-gradient(90deg,rgba(29,33,19,0.18),rgba(29,33,19,0.08),rgba(29,33,19,0.22))]" />

          <div className="relative flex min-h-[35rem] items-center justify-center px-6 py-16 text-center sm:min-h-[39rem] sm:px-10">
            <div className="max-w-2xl text-[#f6f0e7]">
              <p className="font-display text-4xl font-medium uppercase tracking-[0.04em] sm:text-5xl">
                Gift Us
              </p>
              <p className="mx-auto mt-6 max-w-xl font-display text-[1.95rem] leading-[1.22] sm:text-[2.35rem]">
                Your presence is our most cherished gift. If you would love to
                bless our next chapter, we&apos;ve shared our account details and a
                wishlist for anyone who would like to gift us with love.
              </p>
              <Link
                href="/registry"
                className="mx-auto mt-10 inline-flex min-h-14 min-w-[18rem] items-center justify-center rounded-full bg-[#a79a85] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#fffaf2] transition-colors duration-200 hover:bg-[#988a73]"
              >
                Gift Us
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#f1e8d6] px-6 py-12 text-center sm:px-10 sm:py-14">
          <p className="font-display text-5xl font-semibold tracking-[0.08em] text-[#201714] sm:text-6xl">
            B&amp;F
          </p>
          <p className="mx-auto mt-5 max-w-sm font-display text-3xl uppercase leading-[1.1] tracking-[0.08em] text-[#2f241f] sm:text-[2.55rem]">
            Saturday,
            <br />
            June 6, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
