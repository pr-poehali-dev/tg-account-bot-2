interface NavBarProps {
  scrolled: boolean;
}

export default function NavBar({ scrolled }: NavBarProps) {
  return (
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
  );
}
