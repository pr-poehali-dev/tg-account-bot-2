import { useState, useCallback } from "react";
import Icon from "@/components/ui/icon";

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

export default function FaqCtaFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [token, setToken] = useState("");
  const [tokenVisible, setTokenVisible] = useState(false);
  const [tokenCopied, setTokenCopied] = useState(false);

  const handleCopyToken = useCallback(() => {
    if (!token) return;
    navigator.clipboard.writeText(token).then(() => {
      setTokenCopied(true);
      setTimeout(() => setTokenCopied(false), 2000);
    });
  }, [token]);

  return (
    <>
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
                        openFaq === i
                          ? "border-gold bg-gold/10 rotate-45"
                          : "group-hover:border-gold/40"
                      }`}
                    >
                      <Icon
                        name="Plus"
                        size={12}
                        className={`transition-colors duration-300 ${
                          openFaq === i ? "text-gold" : "text-muted-foreground"
                        }`}
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
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,110,0.08), transparent)",
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
                <Icon
                  name={tokenCopied ? "Check" : "Copy"}
                  size={14}
                  className={tokenCopied ? "text-gold" : ""}
                />
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
              <a
                href="#"
                className="hover:text-gold transition-colors duration-300 story-link"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors duration-300 story-link"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
