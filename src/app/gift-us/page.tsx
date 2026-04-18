import Link from "next/link";

export default function RegistryPage() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-[#e5dac8] bg-[#fdfaf5] shadow-[0_28px_90px_rgba(48,26,18,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#f4ecde,#e8dcc7)] px-6 py-14 sm:px-10 sm:py-16">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#d8c5a7]/35 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#b9a98b]/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#9d775d]">
              Gift Us
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold text-[#241816] sm:text-6xl">
              With Love, If You Wish
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#60493f]">
              Your prayers, love, and presence mean the world to us. If you
              would like to bless us with a gift, you can do so through the
              account details below or through our wishlist.
            </p>
          </div>
        </div>

        <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.6rem] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_16px_45px_rgba(48,26,18,0.05)] sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9d775d]">
              Bank Transfer
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-[1.2rem] bg-[#f6f1e8] px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a7566]">
                  Account Name
                </p>
                <p className="mt-2 font-display text-3xl text-[#261a16] sm:text-4xl">
                  Oluwafolajimi
                </p>
              </div>

              <div className="rounded-[1.2rem] bg-[#f6f1e8] px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a7566]">
                  Account Number
                </p>
                <p className="mt-2 font-display text-3xl text-[#261a16] sm:text-[2.2rem]">
                  6506593112
                </p>
              </div>

              <div className="rounded-[1.2rem] bg-[#f6f1e8] px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a7566]">
                  Bank Name
                </p>
                <p className="mt-2 font-display text-3xl text-[#261a16] sm:text-[2.2rem]">
                  Providus Bank
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.6rem] bg-[#8f856f] px-6 py-8 text-[#fffaf2] shadow-[0_20px_55px_rgba(48,26,18,0.08)] sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#efe3d1]">
                Wishlist
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Thoughtful Gifts
              </h2>
              <p className="mt-5 text-base leading-8 text-[#f8f1e7] sm:text-lg">
                If you would rather send a physical gift, we&apos;ve also
                created a wishlist with a few items we&apos;d truly appreciate.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="https://www.wishly.net/list/a147431a-8260-41a6-9bea-651c822c9647"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#f1e8d6] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#4f4539] transition-colors duration-200 hover:bg-[#e8dcc7]"
              >
                Open Wishlist
              </Link>
              <p className="mt-4 break-all text-sm leading-6 text-[#f5ecdf]/88">
                https://www.wishly.net/list/a147431a-8260-41a6-9bea-651c822c9647
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
