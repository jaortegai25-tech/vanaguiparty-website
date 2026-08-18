import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/vanagui-logo.webp";
import galleryMothersDay from "@/assets/gallery-mothers-day.webp";
import galleryMonsterJam from "@/assets/gallery-monster-jam.webp";
import galleryBabyBlue from "@/assets/gallery-baby-blue.webp";
import galleryAngela from "@/assets/gallery-angela.webp";
import gallerySafari from "@/assets/gallery-safari.webp";
import galleryFrozen from "@/assets/gallery-frozen.webp";
import galleryOhBaby from "@/assets/gallery-oh-baby.webp";
import gallerySpace from "@/assets/gallery-space.webp";
import galleryNinjago from "@/assets/gallery-ninjago.webp";
import galleryPrincess from "@/assets/gallery-princess.webp";
import galleryRapunzel from "@/assets/gallery-rapunzel.webp";
import galleryCocomelon from "@/assets/gallery-cocomelon.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanagui Party — Balloon Decor & Party Rentals · Central Florida" },
      {
        name: "description",
        content:
          "Vanagui Party crafts unforgettable balloon installations and party rentals across Central Florida. 10+ years of joyful celebrations.",
      },
      { property: "og:title", content: "Vanagui Party — Balloon Decor & Rentals" },
      {
        property: "og:description",
        content: "Balloon arches, garlands & full party rentals in Central Florida.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Birthdays", img: galleryAngela, desc: "Garlands, number balloons & themed setups for every age." },
  { title: "Themed Parties", img: galleryRapunzel, desc: "Creative themes and immersive party backdrops." },
  { title: "Baby Showers", img: galleryBabyBlue, desc: "Soft pastel installations with custom themes." },
  { title: "Corporate", img: galleryMothersDay, desc: "Branded décor, centerpieces & venue styling." },
  { title: "Custom Designs", img: galleryPrincess, desc: "Show-stopping arches for the night to remember." },
  { title: "Party Rentals", img: galleryCocomelon, desc: "Tables, chairs, backdrops, props & more." },
];

const gallery = [
  { img: galleryFrozen, title: "Frozen Wonderland", tag: "BIRTHDAY · WINTER" },
  { img: galleryMothersDay, title: "Mother's Day", tag: "BURGUNDY · GOLD · IVORY" },
  { img: galleryMonsterJam, title: "Monster Jam Birthday", tag: "BIRTHDAY · KIDS" },
  { img: galleryBabyBlue, title: "Oh Baby — Boy Shower", tag: "BABY SHOWER · BOHO" },
  { img: galleryAngela, title: "Angela's Pastel Dream", tag: "BIRTHDAY · PASTEL" },
  { img: gallerySafari, title: "Amanda's Safari Adventure", tag: "BIRTHDAY · JUNGLE" },
  { img: galleryOhBaby, title: "Oh Baby — Lakeside", tag: "BABY SHOWER · OUTDOOR" },
  { img: gallerySpace, title: "Vihaan's Space Mission", tag: "BIRTHDAY · SPACE" },
  { img: galleryNinjago, title: "Roland's Ninjago", tag: "BIRTHDAY · LEGO" },
  { img: galleryPrincess, title: "Emiliana's Princess Castle", tag: "BIRTHDAY · PRINCESS" },
  { img: galleryRapunzel, title: "Rapunzel's Royal Celebration", tag: "BIRTHDAY · FAIRYTALE" },
  { img: galleryCocomelon, title: "Pastel Cocomelon First Birthday", tag: "1ST BIRTHDAY · PASTEL" },
];

function Plus() {
  return <span aria-hidden className="font-mono text-foreground/70">+</span>;
}

function ContactButton({ copied, onClick, label = "BOOK NOW" }: { copied: boolean; onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-3 border border-foreground bg-foreground text-background px-5 py-2.5 text-xs tracking-[0.2em] hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
    >
      <span className="h-2 w-2 rounded-full bg-accent group-hover:bg-background ticker" />
      {copied ? "COPIED!" : label}
    </button>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const goPrev = () => setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const goNext = () => setActiveIdx((i) => (i + 1) % gallery.length);
  const active = gallery[activeIdx];
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % gallery.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  const handleContact = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:hello@vanaguiparty.com";
    } else {
      navigator.clipboard.writeText("hello@vanaguiparty.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      {/* NAV */}
      <header className="border-b border-foreground">
        <div className="mx-auto max-w-[1600px] px-6 py-4 flex items-center justify-between text-xs tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vanagui" className="h-10 w-10 object-contain" />
            <span className="hidden sm:inline">VANAGUI · EST. 2014</span>
          </div>
          <span className="hidden md:inline">CENTRAL FLORIDA · USA</span>
          <ContactButton copied={copied} onClick={handleContact} />
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-[1600px] px-6 pt-16 pb-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs tracking-[0.3em] mb-8">( BALLOON DECOR · PARTY RENTALS )</p>
            <h1 className="font-display text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight">
              Celebrations,
              <br />
              <span className="italic text-accent">lifted</span> a little
              <br />
              higher — across
              <br />
              Central <span className="italic">Florida.</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ContactButton copied={copied} onClick={handleContact} label="REQUEST A QUOTE" />
              <a href="#services" className="text-xs tracking-[0.25em] underline underline-offset-4">
                EXPLORE SERVICES →
              </a>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="overflow-hidden border border-foreground bg-background">
              <img
                src={galleryRapunzel}
                alt="Rapunzel themed balloon installation"
                className="block w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-3 text-[10px] tracking-[0.2em] border border-foreground">
              <div className="p-3 border-r border-foreground">
                <div className="opacity-60">SERVING</div>
                <div className="mt-1">CENTRAL FL</div>
              </div>
              <div className="p-3 border-r border-foreground">
                <div className="opacity-60">EXPERIENCE</div>
                <div className="mt-1 text-accent">10+ YEARS</div>
              </div>
              <div className="p-3">
                <div className="opacity-60">EVENTS</div>
                <div className="mt-1">500+</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="border-t border-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-4 flex items-center justify-between text-xs tracking-[0.2em]">
            <Plus />
            <span>BALLOONS · BACKDROPS · RENTALS · STYLING</span>
            <Plus />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b border-foreground py-6 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-5xl md:text-7xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center pr-12">
              <span>Birthdays</span>
              <span className="text-accent italic">Themed Parties</span>
              <span>Baby Showers</span>
              <span className="italic">Quinceañeras</span>
              <span className="text-accent">Corporate</span>
              <span>Rentals</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-foreground">
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] opacity-60">( WHAT WE DO )</p>
              <h2 className="font-display text-6xl md:text-8xl leading-none mt-4">Services</h2>
            </div>
            <p className="hidden md:block max-w-sm text-sm opacity-70">
              From intimate gatherings to grand ballroom productions — we design, install, and clean up so you can enjoy the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-foreground">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="border-r border-b border-foreground p-6 group hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] tracking-[0.25em] opacity-60 mb-4">
                  <span>0{i + 1}</span>
                  <span>SERVICE</span>
                </div>
                <div className="aspect-[4/3] overflow-hidden border border-foreground mb-5">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-3xl">{s.title}</h3>
                <p className="mt-2 text-sm opacity-80">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {/* GALLERY */}
      <section id="gallery" className="border-b border-foreground">
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] opacity-60">( RECENT WORK )</p>
              <h2 className="font-display text-6xl md:text-8xl leading-none mt-4">
                Gallery
              </h2>
            </div>
            <p className="hidden md:block max-w-sm text-sm opacity-70">
              A peek at recent installations across Central Florida — every setup designed and built by hand.
            </p>
          </div>

          <div className="border border-foreground bg-background">
            <div
              className="relative aspect-[16/10] overflow-hidden border-b border-foreground bg-foreground/5"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img
                key={active.img}
                src={active.img}
                alt={active.title}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center border border-foreground bg-background/90 hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
              >
                ←
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center border border-foreground bg-background/90 hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
              >
                →
              </button>
              <div className="absolute left-0 right-0 bottom-0 p-5 flex items-end justify-between bg-gradient-to-t from-foreground/80 to-transparent text-background">
                <div>
                  <div className="text-[10px] tracking-[0.3em] opacity-80">
                    {String(activeIdx + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} · {active.tag}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl mt-1">{active.title}</h3>
                </div>
                <Plus />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto p-3 bg-background">
              {gallery.map((g, i) => (
                <button
                  key={g.title}
                  onClick={() => setActiveIdx(i)}
                  aria-label={g.title}
                  className={`relative shrink-0 h-20 w-20 md:h-24 md:w-24 overflow-hidden border transition-all ${
                    i === activeIdx
                      ? "border-accent ring-2 ring-accent"
                      : "border-foreground/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs tracking-[0.3em] opacity-60">( ABOUT )</p>
            <h2 className="font-display text-6xl md:text-7xl mt-4 leading-none">
              A decade of <span className="italic text-accent">joy</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 grid md:grid-cols-2 gap-10">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              For more than 10 years, Vanagui Party has been turning empty rooms into unforgettable celebrations across Central Florida.
            </p>
            <p className="text-sm opacity-90 leading-relaxed">
              We're a family-run studio specialising in custom balloon installations and full-service party rentals. Every event is designed from scratch — built around your colors, your theme, and the people you love. We deliver, set up, and break down so you can be fully present.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 border-t border-background/30 mt-8 pt-8 gap-6">
            {[
              ["10+", "YEARS IN BUSINESS"],
              ["500+", "EVENTS DELIVERED"],
              ["100%", "CUSTOM DESIGNED"],
              ["FL", "STATEWIDE TRAVEL"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl md:text-6xl">{n}</div>
                <div className="text-[10px] tracking-[0.25em] opacity-70 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-foreground">
        <div className="mx-auto max-w-[1600px] px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <Plus />
            <h2 className="font-display text-5xl md:text-7xl">Kind Words</h2>
            <Plus />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                q: "Vanagui transformed our daughter's quinceañera into something out of a magazine. Every detail was perfect.",
                a: "— Maria S., Orlando",
              },
              {
                q: "Booked them for our company holiday party — punctual, professional, and absolutely stunning work.",
                a: "— David L., Tampa",
              },
              {
                q: "The balloon arch at our party had every guest taking photos. Worth every penny.",
                a: "— Ashley & Marcus, Kissimmee",
              },
            ].map((t) => (
              <blockquote
                key={t.a}
                className="border border-foreground p-6 flex flex-col justify-between gap-6"
              >
                <p className="font-display text-2xl italic leading-snug">"{t.q}"</p>
                <footer className="text-[10px] tracking-[0.25em] opacity-70">{t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative">
        <div className="mx-auto max-w-[1600px] px-6 py-32 text-center">
          <div className="flex justify-center mb-10">
            <Plus />
          </div>
          <p className="text-xs tracking-[0.3em] opacity-60">( LET'S CELEBRATE )</p>
          <h2 className="font-display text-[18vw] md:text-[12vw] leading-none mt-4">
            Let's <span className="italic text-accent">Party</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-sm md:text-base opacity-80">
            Tell us about your event and we'll design something unforgettable. Quotes are free, and travel anywhere in Central Florida is on us.
          </p>
          <div className="mt-10 flex justify-center">
            <ContactButton copied={copied} onClick={handleContact} label="GET IN TOUCH" />
          </div>
          <p className="mt-8 font-mono text-xs tracking-[0.3em] opacity-60">
            HELLO @ VANAGUIPARTY.COM · CENTRAL FLORIDA
          </p>
        </div>
        <footer className="border-t border-foreground">
          <div className="mx-auto max-w-[1600px] px-6 py-4 flex items-center justify-between text-[10px] tracking-[0.3em] opacity-70">
            <span>© {new Date().getFullYear()} VANAGUI PARTY</span>
            <span>BALLOON DECOR · RENTALS</span>
            <span>CENTRAL FL</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
