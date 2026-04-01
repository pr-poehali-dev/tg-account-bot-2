import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    num: "01",
    title: "Стратегия",
    desc: "Исследование рынка, позиционирование бренда и цифровая стратегия для устойчивого роста.",
    tags: ["Аудит", "Брендинг", "CJM"],
  },
  {
    num: "02",
    title: "Дизайн",
    desc: "Визуальные системы, UI/UX и фирменный стиль, которые запоминаются с первого взгляда.",
    tags: ["UI/UX", "Айдентика", "Моушн"],
  },
  {
    num: "03",
    title: "Разработка",
    desc: "Веб-сайты и приложения, сочетающие скорость, надёжность и элегантную архитектуру.",
    tags: ["React", "Next.js", "API"],
  },
  {
    num: "04",
    title: "Продвижение",
    desc: "SEO, контент и медиа-стратегии, которые привлекают аудиторию и конвертируют.",
    tags: ["SEO", "Контент", "Аналитика"],
  },
];

const works = [
  {
    title: "Luxara Retail",
    cat: "E-commerce · Брендинг",
    year: "2024",
    color: "from-zinc-900 to-stone-900",
    accent: "bg-amber-800/20",
  },
  {
    title: "Norde Finance",
    cat: "Финтех · UX",
    year: "2024",
    color: "from-zinc-900 to-slate-900",
    accent: "bg-blue-900/20",
  },
  {
    title: "Atelier Blanc",
    cat: "Мода · Лендинг",
    year: "2023",
    color: "from-stone-900 to-zinc-800",
    accent: "bg-rose-900/20",
  },
];

export default function WorksServicesProcess() {
  const [activeWork, setActiveWork] = useState(0);

  // Work carousel auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActiveWork((p) => (p + 1) % works.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── SERVICES ── */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-20 gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold">
                  Что мы делаем
                </span>
              </div>
              <h2
                className="font-cormorant font-light leading-none"
                style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.02em" }}
              >
                Услуги
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Полный цикл — от идеи до запуска и дальше. Работаем как внутренняя команда.
            </p>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((svc, i) => (
              <div
                key={i}
                className="service-card bg-background p-10 lg:p-14 cursor-default"
              >
                <div className="service-num text-5xl font-cormorant font-light text-border mb-8 transition-colors duration-300">
                  {svc.num}
                </div>
                <h3 className="text-2xl font-cormorant font-semibold mb-4 text-foreground">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wider uppercase border border-border px-3 py-1 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section className="py-32 px-6 lg:px-12 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold">
              Портфолио
            </span>
          </div>

          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2
              className="font-cormorant font-light leading-none"
              style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.02em" }}
            >
              Избранные
              <br />
              <em className="text-gold not-italic">работы</em>
            </h2>
            <button className="btn-outline text-xs">
              Все проекты
              <Icon name="ArrowRight" size={13} />
            </button>
          </div>

          {/* Work showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {works.map((w, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ${
                  activeWork === i ? "lg:col-span-1 opacity-100" : "opacity-70 hover:opacity-90"
                }`}
                onClick={() => setActiveWork(i)}
                style={{ minHeight: "360px" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${w.color} transition-all duration-700`}
                />
                <div className={`absolute inset-0 ${w.accent}`} />

                {/* Decorative lines */}
                <div className="absolute inset-6 border border-white/5 group-hover:border-white/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest uppercase text-white/40">
                      {w.year}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeWork === i ? "bg-gold" : "bg-white/20"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/40 mb-2">
                      {w.cat}
                    </p>
                    <h3
                      className="font-cormorant font-light text-white"
                      style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                    >
                      {w.title}
                    </h3>
                    <div
                      className={`mt-4 flex items-center gap-2 text-xs tracking-wider uppercase transition-all duration-300 ${
                        activeWork === i
                          ? "text-gold opacity-100"
                          : "text-white/0 group-hover:text-white/50 group-hover:opacity-100"
                      }`}
                    >
                      Смотреть кейс
                      <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex items-center gap-2 mt-6">
            {works.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveWork(i)}
                className={`h-px transition-all duration-500 ${
                  activeWork === i ? "w-12 bg-gold" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold">
              Как мы работаем
            </span>
          </div>
          <h2
            className="font-cormorant font-light leading-none mb-20"
            style={{ fontSize: "clamp(42px, 6vw, 88px)", letterSpacing: "-0.02em" }}
          >
            Процесс
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "1", t: "Брифинг", d: "Погружаемся в задачу, изучаем рынок и конкурентов, формируем цели.", icon: "MessageSquare" },
                { n: "2", t: "Концепция", d: "Создаём архитектуру, прототипы и визуальную концепцию.", icon: "Layers" },
                { n: "3", t: "Реализация", d: "Разрабатываем и тестируем. Итерации с обратной связью.", icon: "Code2" },
                { n: "4", t: "Запуск", d: "Деплой, обучение команды и поддержка после старта.", icon: "Rocket" },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 bg-background group-hover:border-gold/40 transition-colors duration-300">
                    <span className="font-cormorant text-xl font-light text-gold">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-3 text-foreground">
                    {step.t}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
