import { RefObject } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { num: "127", label: "Проектов" },
  { num: "8", label: "Лет опыта" },
  { num: "94%", label: "Вернулись снова" },
  { num: "3×", label: "Быстрее рынка" },
];

interface HeroSectionProps {
  heroRef: RefObject<HTMLDivElement>;
}

export default function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large decorative number */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 font-cormorant font-light text-right select-none pointer-events-none"
        style={{
          fontSize: "clamp(180px, 30vw, 400px)",
          lineHeight: 0.9,
          color: "rgba(200,169,110,0.04)",
          letterSpacing: "-0.04em",
        }}
      >
        2025
      </div>

      {/* Vertical line */}
      <div
        className="absolute left-6 lg:left-12 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 40%, rgba(200,169,110,0.25) 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Tag */}
        <div className="anim-hidden animate-fade-in delay-100 mb-8 inline-flex items-center gap-3">
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs tracking-widest uppercase text-gold font-light">
            Цифровая студия · Москва
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="anim-hidden animate-fade-up delay-200 font-cormorant font-light leading-none mb-8"
          style={{ fontSize: "clamp(56px, 9vw, 140px)", letterSpacing: "-0.02em" }}
        >
          Создаём сайты,
          <br />
          <em className="text-gold not-italic">которые продают</em>
          <br />
          <span className="text-muted-foreground">и восхищают</span>
        </h1>

        {/* Sub */}
        <p className="anim-hidden animate-fade-up delay-400 text-muted-foreground font-light text-lg max-w-xl mb-12 leading-relaxed">
          Мы превращаем идеи в цифровые продукты. Стратегия, дизайн и
          разработка — под одной крышей.
        </p>

        {/* CTA group */}
        <div className="anim-hidden animate-fade-up delay-500 flex flex-wrap gap-4 mb-20">
          <button className="btn-primary">
            Начать проект
            <Icon name="ArrowRight" size={14} />
          </button>
          <button className="btn-outline">Смотреть работы</button>
        </div>

        {/* Stats row */}
        <div className="anim-hidden animate-fade-up delay-700 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-cormorant font-light text-gold"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                {s.num}
              </div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
