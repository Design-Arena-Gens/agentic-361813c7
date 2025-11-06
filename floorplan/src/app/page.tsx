export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 font-sans text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            Ground Floor Layout
          </h1>
          <p className="text-lg text-zinc-600">
            Single-storey residential plan featuring a central hall measuring{" "}
            <strong>24&#8242; × 12&#8242;</strong>, mirrored by two pairs of{" "}
            <strong>12&#8242; × 11&#8242;</strong> rooms on either side. A
            staircase rises from the north-east corner of the hall and the clear
            ceiling height is set to <strong>11.6&#8242;</strong>.
          </p>
        </header>

        <section className="flex flex-col gap-10">
          <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-300 bg-white p-6 shadow-sm">
            <div className="relative mx-auto aspect-[34/24] max-w-3xl bg-slate-100">
              <div className="absolute inset-0 grid grid-cols-[11fr_12fr_11fr] grid-rows-[12fr_12fr]">
                <div className="flex flex-col border border-zinc-400 bg-slate-50">
                  <div className="flex flex-1 items-center justify-center border-b border-zinc-300 bg-emerald-50">
                    <label className="text-center text-sm font-semibold text-emerald-700">
                      Room A
                      <br />
                      12&#8242; × 11&#8242;
                    </label>
                  </div>
                  <div className="flex flex-1 items-center justify-center bg-emerald-50">
                    <label className="text-center text-sm font-semibold text-emerald-700">
                      Room B
                      <br />
                      12&#8242; × 11&#8242;
                    </label>
                  </div>
                </div>

                <div className="relative flex flex-col border border-zinc-400 bg-amber-50">
                  <div className="absolute inset-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-amber-400 bg-white/60">
                    <p className="text-center text-lg font-semibold text-amber-800">
                      Central Hall
                    </p>
                    <p className="text-sm text-amber-700">24&#8242; × 12&#8242;</p>
                  </div>
                  <div className="absolute bottom-6 right-6 flex h-20 w-20 flex-col items-center justify-center rounded-xl border-2 border-amber-500 bg-white shadow">
                    <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                      Stair
                    </span>
                    <span className="text-[10px] text-amber-600">
                      to upper floors
                    </span>
                  </div>
                </div>

                <div className="flex flex-col border border-zinc-400 bg-slate-50">
                  <div className="flex flex-1 items-center justify-center border-b border-zinc-300 bg-sky-50">
                    <label className="text-center text-sm font-semibold text-sky-700">
                      Room C
                      <br />
                      12&#8242; × 11&#8242;
                    </label>
                  </div>
                  <div className="flex flex-1 items-center justify-center bg-sky-50">
                    <label className="text-center text-sm font-semibold text-sky-700">
                      Room D
                      <br />
                      12&#8242; × 11&#8242;
                    </label>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-4 text-xs font-medium text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 shadow">
                    34&#8242; overall width
                  </span>
                </div>
                <div className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 flex-col items-center justify-between py-4 text-xs font-medium text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 shadow">
                    24&#8242; overall length
                  </span>
                </div>
                <div className="absolute left-[32.35%] top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-zinc-500">
                  12&#8242;
                </div>
                <div className="absolute right-[32.35%] top-1/2 -translate-y-1/2 rotate-90 text-xs font-medium text-zinc-500">
                  12&#8242;
                </div>
                <div className="absolute left-1/2 top-[25%] -translate-x-1/2 text-xs font-medium text-zinc-500">
                  12&#8242;
                </div>
                <div className="absolute left-1/2 bottom-[25%] -translate-x-1/2 text-xs font-medium text-zinc-500">
                  12&#8242;
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">
                Space Allocation
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li>Hall anchors the design with direct connections to every room.</li>
                <li>
                  Paired rooms on each side enable flexible use as bedrooms, study, or
                  guest spaces.
                </li>
                <li>
                  Staircase positioned in the hall corner for quick vertical circulation.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">
                Key Dimensions
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li>Total footprint spans 34&#8242; (width) × 24&#8242; (length).</li>
                <li>Floor-to-ceiling height set to 11.6&#8242; for ample headroom.</li>
                <li>
                  Structural grid aligns with 12&#8242; modules, simplifying future
                  expansion.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
