import Image from "next/image";
import Link from "next/link";

import { RSVP_URL } from "wed/data/site-links";
import detailsPhotoOne from "../../assets/b_f_2.jpeg";
import detailsPhotoTwo from "../../assets/b_f_1.jpeg";

export default function DetailsPage() {
  return (
    <section className="px-4 pb-0 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-t-[2.2rem] border border-[#e5dac8] bg-[#fdfaf5] shadow-[0_28px_90px_rgba(48,26,18,0.08)]">
        <div className="relative h-[18rem] sm:h-[22rem]">
          <Image
            src={detailsPhotoOne}
            alt="Blessing and Folajimi standing together outdoors."
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,20,16,0.12),rgba(24,20,16,0.42))]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-4xl uppercase tracking-[0.08em] text-[#fff9f1] sm:text-5xl">
              The Details
            </p>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <div className="rounded-[0.45rem] bg-[#948a74] px-6 py-14 text-center text-[#fbf5ec] sm:px-10 sm:py-16">
            <p className="mx-auto max-w-xl font-display text-[1.55rem] leading-[1.45] sm:text-[1.8rem]">
              We invite you to celebrate our church wedding and traditional
              wedding on Saturday, June 6, 2026, as we gather with family and
              friends in Lagos for a joyful beginning.
            </p>

            <div className="mt-10">
              <Link
                href={RSVP_URL}
                className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-[#f1e8d6] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4f4539] transition-colors duration-200 hover:bg-[#e7dcc8]"
              >
                RSVP
              </Link>
            </div>
          </div>

          <div className="relative mt-6 h-[17rem] overflow-hidden rounded-[0.35rem] sm:h-[21rem]">
            <Image
              src={detailsPhotoTwo}
              alt="Blessing and Folajimi smiling during their engagement celebration."
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[0.35rem] bg-[#f6f1e8] px-6 py-10 text-center text-[#30231d]">
              <div className="space-y-8 font-display text-[1.35rem] leading-[1.4] sm:text-[1.5rem]">
                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Date
                  </p>
                  <p className="mt-3">Saturday, June 6, 2026</p>
                </div>

                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Church Wedding
                  </p>
                  <p className="mt-3">
                    Sovereign Grace Bible Church
                    <br />
                    30, Kings Avenue
                    <br />
                    Ojodu Berger, Lagos
                  </p>
                </div>

                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Church Service Time
                  </p>
                  <p className="mt-3">10:00 AM</p>
                </div>

                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Traditional Wedding
                  </p>
                  <p className="mt-3">Traditional wedding follows after.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[0.35rem] bg-[#f6f1e8] px-6 py-10 text-center text-[#30231d]">
              <div className="space-y-8 font-display text-[1.35rem] leading-[1.4] sm:text-[1.5rem]">
                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Traditional Time
                  </p>
                  <p className="mt-3">1:00 PM</p>
                </div>

                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Color For The Day
                  </p>
                  <p className="mt-3">
                    White
                    <br />
                    and
                    <br />
                    Champagne Gold
                  </p>
                </div>

                <div>
                  <p className="text-[1rem] uppercase tracking-[0.14em] text-[#7f6d5d]">
                    Contact
                  </p>
                  <p className="mt-3">
                    Tobi: 08143002608
                    <br />
                    Praise: +234 903 359 8592
                  </p>
                </div>
              </div>
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
