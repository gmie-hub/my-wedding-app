import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1743172244188-8e09529c2ef4?auto=format&fit=crop&w=1400&q=80";

export default function HomeHeroSection() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#fbf7f1] shadow-[0_30px_90px_rgba(48,26,18,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,184,141,0.34),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.86),_rgba(249,239,227,0.76))]" />

          <div className="relative grid min-h-[calc(100svh-9rem)] items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-0">
            <div className="flex flex-col justify-center px-6 pb-10 pt-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#9d775d]">
                <span className="h-px w-12 bg-[#d7b799]" />
                June 2026
              </div>

              <p className="mt-8 font-display text-6xl font-semibold leading-none text-[#3a211b] sm:text-7xl lg:text-8xl">
                B&amp;F
              </p>

              <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.95] text-[#241816] sm:text-6xl lg:text-[5.2rem]">
                Blessing &amp; Folajimi
              </h1>

              <div className="mt-8 max-w-md space-y-4 text-base leading-8 text-[#60493f] sm:text-lg">
                <p className="rounded-full border border-[#e8d7c5] bg-white/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.22em] text-[#8a6853]">
                  Saturday, June 6, 2026
                </p>
                <p className="text-xl font-semibold text-[#2b1b18] sm:text-2xl">
                  Duro Event Center,
                  <br />
                  Aguda, Surulere
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center rounded-full bg-[#3a211b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#fff8f1] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View Schedule
                </Link>
                <Link
                  href="/venue"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8c0ab] bg-white/75 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#5f473c] transition-colors duration-200 hover:bg-[#efe1d2]"
                >
                  Explore Venue
                </Link>
              </div>
            </div>

            <div className="relative min-h-[22rem] lg:min-h-full">
              <Image
                src={heroImage}
                alt="Elegant outdoor wedding decor with flowers and an ornate table setup."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,20,17,0.08),rgba(37,20,17,0.2)),linear-gradient(270deg,rgba(37,20,17,0.04),rgba(37,20,17,0.48))]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/35 bg-white/18 p-5 text-white shadow-[0_14px_40px_rgba(0,0,0,0.15)] backdrop-blur sm:inset-x-8 sm:bottom-8 sm:p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-white/78">
                  Wedding Day
                </p>
                <p className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Saturday, June 6, 2026
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/88 sm:text-base">
                  A beautiful celebration awaits at Duro Event Center in Aguda,
                  Surulere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
