"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import type { MenuItem } from "@/lib/content";

const categories = ["Tümü", "Burger", "Çıtır Tavuk", "Loaded Fries", "Kova"] as const;

export function MenuSection({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Tümü");
  const reduced = useReducedMotion();
  const filtered = useMemo(() => (active === "Tümü" ? items : items.filter((item) => item.category === active)), [active, items]);

  return (
    <section id="menu" className="border-y border-white/8 bg-panel/55 py-20 sm:py-24 lg:py-28">
      <div className="container-brand">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-brand">Menü</p>
            <h2 className="max-w-2xl font-display text-4xl font-black uppercase leading-[0.94] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Favorini seç. Çıtırı biz hallederiz.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">Az ürün, net kalite: aynı mutfaktan çıkan güçlü burgerler, tavuklar ve paylaşmalık kovalar.</p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition ${active === category ? "border-brand bg-brand text-black" : "border-white/10 bg-white/[0.035] text-cream hover:border-brand/50 hover:bg-white/[0.06]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, delay: reduced ? 0 : index * 0.025 }}
                className="group relative min-h-64 overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel-2 p-6 transition hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_22px_60px_rgba(0,0,0,.32)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 blur-3xl transition duration-500 group-hover:bg-brand/20" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-muted">{item.category}</span>
                    {item.badge && <span className="rounded-full bg-brand px-3 py-1.5 text-xs font-black text-black">{item.badge}</span>}
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-[-0.02em]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                  <div className="mt-auto pt-8 text-2xl font-black text-brand">₺{item.price}</div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
