import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";

/* ─────────────────────────────── DATA ────────────────────────────────── */

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

const stats = [
  { num: "127", label: "Проектов" },
  { num: "8", label: "Лет опыта" },
  { num: "94%", label: "Вернулись снова" },
  { num: "3×", label: "Быстрее рынка" },
];

const faqs = [
  {
    q: "Сколько стоит проект?",
    a: "Стоимость зависит от объёма и сложности. Лендинг — от 80 000 ₽, корпоративный сайт — от 200 000 ₽. Обсудим детали на звонке.",
  },
  {
    q: "Как долго длится разработка?",
    a: "Лендинг — 2–3 недели, многостраничный сайт — 4–8 недель. Всегда чётко фиксируем сроки в договоре.",
  },
  {
    q: "Вы работаете удалённо?",
    a: "Да, со всей Россией и СНГ. Наши клиенты — из Москвы, Петербурга, Екатеринбурга, Алматы и других городов.",
  },
  {
    q: "Что входит в поддержку после запуска?",
    a: "3 месяца бесплатных правок и технической поддержки. Далее — по тарифу от 8 000 ₽/месяц.",
  },
];

/* ───────────────────────────── COMPONENT ─────────────────────────────── */

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeWork, setActiveWork] = useState(0);
  const [token, setToken] = useState("");
  const [tokenVisible, setTokenVisible] = useState(false);
  const [tokenCopied, setTokenCopied] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleCopyToken = useCallback(() => {
    if (!token) return;
    navigator.clipboard.writeText(token).then(() => {
      setTokenCopied(true);
      setTimeout(() => setTokenCopied(false), 2000);
    });
  }, [token]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Work carousel auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActiveWork((p) => (p + 1) % works.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-ibm grain overflow-x-hidden">
      {/* ── NAVIGATION ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gold rounded-none" />
            <span className="font-cormorant text-xl font-semibold tracking-widest uppercase text-foreground">
              Studio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {["Услуги", "Работы", "О нас", "Контакт"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-widest uppercase text-muted-foreground story-link hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="btn-primary text-xs py-2.5 px-5">
            Обсудить проект
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5"
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
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 40%, rgba(200,169,110,0.25) 70%, transparent)" }}
        />

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Tag */}
          <div
            className="anim-hidden animate-fade-in delay-100 mb-8 inline-flex items-center gap-3"
          >
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
          <p
            className="anim-hidden animate-fade-up delay-400 text-muted-foreground font-light text-lg max-w-xl mb-12 leading-relaxed"
          >
            Мы превращаем идеи в цифровые продукты. Стратегия, дизайн и
            разработка — под одной крышей.
          </p>

          {/* CTA group */}
          <div className="anim-hidden animate-fade-up delay-500 flex flex-wrap gap-4 mb-20">
            <button className="btn-primary">
              Начать проект
              <Icon name="ArrowRight" size={14} />
            </button>
            <button className="btn-outline">
              Смотреть работы
            </button>
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
                        activeWork === i ? "text-gold opacity-100" : "text-white/0 group-hover:text-white/50 group-hover:opacity-100"
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

      {/* ── DIVIDER ── */}
      <div className="divider-gold mx-6 lg:mx-12" />

      {/* ── FAQ ── */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold">
                  FAQ
                </span>
              </div>
              <h2
                className="font-cormorant font-light leading-none mb-6"
                style={{ fontSize: "clamp(42px, 5vw, 72px)", letterSpacing: "-0.02em" }}
              >
                Частые
                <br />
                вопросы
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Не нашли ответ? Напишите нам — ответим в течение часа в рабочее время.
              </p>
            </div>

            <div className="space-y-0 divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-ibm text-sm font-light text-foreground group-hover:text-gold transition-colors duration-300 pr-4">
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-6 h-6 border border-border flex items-center justify-center transition-all duration-300 ${
                        openFaq === i ? "border-gold bg-gold/10 rotate-45" : "group-hover:border-gold/40"
                      }`}
                    >
                      <Icon
                        name="Plus"
                        size={12}
                        className={`transition-colors duration-300 ${openFaq === i ? "text-gold" : "text-muted-foreground"}`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openFaq === i ? "max-h-48 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ── */}
      <section className="py-40 px-6 lg:px-12 relative overflow-hidden">
        {/* Background effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,110,0.08), transparent)",
          }}
        />
        <div className="absolute inset-6 border border-border/40" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold">
              Начнём?
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          <h2
            className="font-cormorant font-light leading-tight mb-8"
            style={{ fontSize: "clamp(48px, 8vw, 112px)", letterSpacing: "-0.025em" }}
          >
            Ваш проект —
            <br />
            <em className="text-gold not-italic">наш приоритет</em>
          </h2>

          <p className="text-muted-foreground text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed">
            Расскажите о своей идее. Первая консультация — бесплатно. Отвечаем в течение 2 часов.
          </p>

          {/* Token field */}
          <div className="mb-8 max-w-md mx-auto">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Токен доступа
            </p>
            <div className="relative flex items-center border border-border bg-background/60 backdrop-blur-sm focus-within:border-gold/50 transition-colors duration-300">
              <Icon
                name="KeyRound"
                size={14}
                className="ml-4 text-muted-foreground flex-shrink-0"
              />
              <input
                type={tokenVisible ? "text" : "password"}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Введите токен..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 py-3.5 px-3 outline-none font-ibm tracking-wide"
              />
              <button
                onClick={() => setTokenVisible((v) => !v)}
                className="p-3 text-muted-foreground hover:text-gold transition-colors duration-300"
                title={tokenVisible ? "Скрыть" : "Показать"}
              >
                <Icon name={tokenVisible ? "EyeOff" : "Eye"} size={14} />
              </button>
              <button
                onClick={handleCopyToken}
                disabled={!token}
                className="p-3 border-l border-border text-muted-foreground hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
                title="Скопировать"
              >
                <Icon name={tokenCopied ? "Check" : "Copy"} size={14} className={tokenCopied ? "text-gold" : ""} />
              </button>
            </div>
            {token && (
              <p className="text-xs text-gold/70 mt-2 text-left tracking-wide">
                {tokenCopied ? "✓ Скопировано" : `${token.length} символов`}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="btn-primary text-sm py-4 px-8">
              Оставить заявку
              <Icon name="ArrowRight" size={15} />
            </button>
            <a href="#" className="btn-outline text-sm py-4 px-8">
              <Icon name="Phone" size={14} />
              +7 (800) 000-00-00
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-gold" />
                <span className="font-cormorant text-lg font-semibold tracking-widest uppercase">
                  Studio
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Цифровая студия с фокусом на результат. Работаем с 2016 года.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Услуги
              </p>
              {["Стратегия", "Дизайн", "Разработка", "Продвижение"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-gold story-link mb-2 transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Контакты
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>hello@studio.ru</p>
                <p>+7 (800) 000-00-00</p>
                <p>Москва, Россия</p>
              </div>
              <div className="flex gap-3 mt-6">
                {["Telegram", "VK", "Behance"].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    className="text-xs border border-border px-3 py-1.5 text-muted-foreground hover:border-gold/40 hover:text-gold transition-all duration-300"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="divider-gold mb-8" />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© 2025 Studio. Все права защищены.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors duration-300 story-link">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-300 story-link">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}