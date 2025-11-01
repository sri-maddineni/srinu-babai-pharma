export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-white/60 dark:bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-orange-600 dark:text-orange-400">Probionyx</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4 text-black/80 dark:text-white/80">About</a>
            {/* <a href="#benefits" className="hover:underline underline-offset-4 text-black/80 dark:text-white/80">Benefits</a> */}
            <a href="#contact" className="hover:underline underline-offset-4 text-black/80 dark:text-white/80">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
             Bridging Nature and Science  for Better Health
          </h1>
          <p className="mt-4 text-lg text-orange-700 dark:text-orange-300">
            probionyx.com — Innovation in probiotics
          </p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-black/80 dark:text-white/80">
            At Probionyx, we specialize in scientifically developed nutraceutical formulations that target digestive health, immune resilience, joint mobility, and holistic wellness.
            
            {/* Probionyx develops grade probiotic solutions designed to support
            digestive balance, immune function, and overall wellbeing. Trusted by
            healthcare professionals and built on rigorous science. */}
            {/* Probionyx develops nutraceutical supplements designed to support digestive balance, immune function, joint health, and overall wellbeing. */}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400"
            >
              Get in touch
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-full border border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-sky-50 dark:hover:bg-sky-900/30"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* Benefits */}
        {/* <section id="benefits" className="bg-gradient-to-b from-white to-cyan-50 dark:from-black dark:to-cyan-950 border-y border-cyan-100 dark:border-cyan-900/50">
          <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Clinically Oriented</h3>
              <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                Strains selected for evidence-based outcomes, manufactured to strict
                quality standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Targeted Formulations</h3>
              <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                Designed to support gut balance, immunity, and specific patient needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Stable & Reliable</h3>
              <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                Shelf-stable profiles with consistent CFU counts across shelf life.
              </p>
            </div>
          </div>
        </section> */}

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">About Probionyx</h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-7 text-black/80 dark:text-white/80">
           Our mission is to close the gap between nutrition and medicine by offering evidence-based nutraceuticals that promote better health outcomes.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
              For partnerships and inquiries, reach us via email.
            </p>
            <a
              href="mailto:info@probionyx.com"
              className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:opacity-80"
            >
              info@probionyx.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Probionyx</span>
          <span className="text-black/60 dark:text-white/60">Innovation in probiotics</span>
        </div>
      </footer>
    </div>
  );
}
