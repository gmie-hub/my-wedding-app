import Image from "next/image";
import Link from "next/link";

import { RSVP_URL } from "wed/data/site-links";
import storyPhotoOne from "../../assets/b_f_3.jpeg";
import storyPhotoTwo from "../../assets/b_f_4.jpeg";

export default function OurStoryPage() {
  return (
    <section className="px-4 pb-0 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-t-[2.2rem] border border-[#e5dac8] bg-[#fdfaf5] shadow-[0_28px_90px_rgba(48,26,18,0.08)]">
        <div className="px-6 py-12 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto w-fit rotate-[-2deg] rounded-[0.35rem] bg-white p-3 pb-9 shadow-[0_24px_50px_rgba(36,24,22,0.14)]">
              <Image
                src={storyPhotoOne}
                alt="Blessing and Folajimi smiling together during their engagement celebration."
                width={320}
                className="h-auto w-[14rem] object-cover sm:w-[16rem]"
                priority
              />
            </div>

            <div className="mt-10 text-center">
              <p className="font-display text-xl uppercase tracking-[0.14em] text-[#31231d] sm:text-2xl">
                This Is Our Story
              </p>
            </div>

            <div className="mt-8 space-y-7 font-display text-[1.45rem] leading-[1.45] text-[#33261f] sm:text-[1.65rem]">
              <p>
                Every love story is beautiful, but ours is our favorite.
              </p>
              <p>
                It all started in a way neither of us could have fully
                imagined. A simple message was sent on our group chat asking
                for prayers while school was still in session and our church
                plant in Egbe was preparing for a conference. What seemed like
                an ordinary moment became the beginning of something so special,
                because it sparked the curiosity that first drew us toward each
                other.
              </p>
              <p>
                We met for the first time during a Bible study when the holiday
                season brought us into the same space. We did not know it then,
                but that meeting would mark the start of a journey that would
                shape our lives in the most beautiful way.
              </p>
              <p>
                As we got to know each other, what started as a simple
                connection began to grow into something deeper. We discovered a
                shared love for God, a shared sense of purpose, and a peace in
                one another&apos;s presence that felt both gentle and certain.
              </p>
            </div>

            <div className="relative mx-auto mt-14 flex h-[22rem] w-full max-w-md items-end justify-center sm:h-[24rem]">
              <div className="absolute left-2 top-0 rotate-[-5deg] rounded-[0.35rem] bg-white p-3 pb-8 shadow-[0_22px_45px_rgba(36,24,22,0.14)] sm:left-8">
                <Image
                  src={storyPhotoTwo}
                  alt="Blessing and Folajimi standing together and smiling outdoors."
                  width={220}
                  className="h-auto w-[10rem] object-cover sm:w-[11rem]"
                />
              </div>
              <div className="absolute right-0 bottom-0 rotate-[6deg] rounded-[0.35rem] bg-white p-3 pb-8 shadow-[0_22px_45px_rgba(36,24,22,0.14)] sm:right-8">
                <Image
                  src={storyPhotoOne}
                  alt="Blessing and Folajimi sharing a joyful engagement moment."
                  width={230}
                  className="h-auto w-[10.5rem] object-cover sm:w-[11.5rem]"
                />
              </div>
            </div>

            <div className="mt-10 space-y-7 font-display text-[1.45rem] leading-[1.45] text-[#33261f] sm:text-[1.65rem]">
              <p>
                One moment we will always hold close to our hearts was the trip
                to Abeokuta during psychiatric rounds. It was more than the
                distance covered from Lagos, it was the depth of the
                conversation we shared there. We spoke about our values, our
                dreams, and the future we hoped to build, and in that moment it
                became even clearer that God was writing something precious
                between us.
              </p>
              <p>
                Along the way, we have come to admire so much in each other:
                patience, sincerity, joy, resilience, humor, and the quiet
                strength that keeps drawing us back to grace, understanding, and
                growth. We have learned how to love one another not only in
                grand moments, but in the steady, faithful, everyday ways that
                matter most.
              </p>
              <p>
                We are not only fianc&eacute; and fianc&eacute;e, we are
                partners, answered prayers, and a reminder to each other of just
                how kind God has been.
              </p>
              <p>
                As we step into forever, we are filled with gratitude for the
                journey we have shared and excitement for all that lies ahead.
                We choose each other again and again, in every season and every
                moment.
              </p>
              <p>
                This is not just the beginning of our forever...
                <br />
                It is the continuation of a love that God Himself wrote.
              </p>
              <p>And by His grace, this beautiful story is only just unfolding.</p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href={RSVP_URL}
                className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-[#8f856f] px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#fffaf2] transition-colors duration-200 hover:bg-[#7c725d]"
              >
                RSVP
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
