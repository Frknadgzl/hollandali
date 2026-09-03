import Image from "next/image";
import { HeroMedia, Reveal, ScrollProgress } from "@/components/motion-effects";
import { MenuSection } from "@/components/menu-section";
import { ButtonLink } from "@/components/ui/button";
import { getMenu } from "@/lib/content";

export default async function Home() {
  const menu = await getMenu();

  return (
    <main className="overflow-clip">
      <ScrollProgress />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/80 backdrop-blur-xl">
        <div className="container-brand flex h-20 items-center justify-between gap-6">
          <a href="#top" aria-label="Hollandalı ana sayfa" className="flex items-center gap-3">
            <Image src="/hollandali-logo.png" alt="Hollandalı" width={118} height={118} priority className="h-14 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-white/70 md:flex">
            <a className="transition hover:text-brand" href="#menu">Menü</a>
            <a className="transition hover:text-brand" href="#hikaye">Hikayemiz</a>
            <a className="transition hover:text-brand" href="#sube">Şubeler</a>
          </nav>
          <ButtonLink href="#menu" className="hidden sm:inline-flex">Menüyü gör</ButtonLink>
        </div>
      </header>

      <section id="top" className="relative min-h-[calc(100svh-5rem)] py-14 sm:py-18 lg:py-24">
        <div className="container-brand grid min-h-[70svh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative z-10 max-w-2xl">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand">
                İstanbul'da yakında
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="text-balance font-display text-[clamp(3.7rem,9vw,7.6rem)] font-black uppercase leading-[0.83] tracking-[-0.055em]">Taze. Çıtır. Helal.</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">Hollanda sokak lezzeti kültürünü Türkiye'nin damak tadıyla buluşturan yeni nesil çıtır tavuk markası.</p>
            </Reveal>
            <Reveal delay={0.17} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#menu">Menüyü keşfet <span aria-hidden="true">→</span></ButtonLink>
              <ButtonLink href="#hikaye" variant="secondary">Konsepti tanı</ButtonLink>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm">
                <div><strong className="block text-lg text-cream">%100</strong><span className="text-muted">Helal tavuk</span></div>
                <div><strong className="block text-lg text-cream">Siparişle</strong><span className="text-muted">Taze hazırlık</span></div>
                <div><strong className="block text-lg text-cream">Özel</strong><span className="text-muted">Hollandalı sosları</span></div>
              </div>
            </Reveal>
          </div>

          <HeroMedia>
            <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-brand lg:rounded-[2.5rem]">
              <Image src="/hollandali-feast.png" alt="Çıtır tavuk burger, wings ve loaded fries" width={1536} height={1024} priority className="aspect-[4/3] w-full object-cover lg:aspect-[1.12/1]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/12 bg-black/65 px-4 py-3 backdrop-blur-xl">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-brand">Hollandalı Original</div>
                <div className="mt-1 text-sm font-bold text-cream">Dışı çıtır, içi sulu.</div>
              </div>
            </div>
          </HeroMedia>
        </div>
      </section>

      <MenuSection items={menu} />

      <section id="hikaye" className="py-20 sm:py-24 lg:py-32">
        <div className="container-brand grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-brand">Hollandalı fikri</p>
            <h2 className="text-balance font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Hollanda ruhu. Türkiye enerjisi.</h2>
          </Reveal>
          <Reveal delay={0.08} className="self-end">
            <p className="text-base leading-8 text-muted sm:text-lg">Konseptimiz, hızlı servis kolaylığını daha kaliteli ürün algısıyla birleştiriyor. Menü sade, mutfak standardize, marka dili güçlü. Böylece hem ilk pilot restoran hem de sonraki franchise şubeleri için ölçeklenebilir bir temel oluşuyor.</p>
          </Reveal>
        </div>
      </section>

      <section id="sube" className="pb-20 sm:pb-24 lg:pb-32">
        <div className="container-brand">
          <Reveal>
            <div className="surface-glass overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-brand">İlk şube</p>
                  <h2 className="font-display text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">İstanbul • Çok yakında</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-muted">Teslimat, gel-al ve kompakt oturma alanını bir araya getiren modern pilot mağaza modeli.</p>
                </div>
                <ButtonLink href="mailto:hello@hollandali.com">Haberdar ol</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10">
        <div className="container-brand flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/hollandali-logo.png" alt="Hollandalı" width={88} height={88} className="h-12 w-auto object-contain" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-muted">Taze • Çıtır • Helal</span>
          </div>
          <p className="text-xs text-white/40">© 2026 Hollandalı. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
