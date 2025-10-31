export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <img
          src="/volgograd-city-panorama-with-motherland-calls-stat.jpg"
          alt="Volgograd panorama"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-secondary-foreground mb-6 text-balance">Волгоград</h1>
        <p className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8 text-pretty">
          Город-герой на берегу великой Волги. История, память и современность в цифрах и фактах.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-secondary-foreground/90">
            <div className="text-4xl font-bold">1589</div>
            <div className="text-sm uppercase tracking-wider">Год основания</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-secondary-foreground/30" />
          <div className="text-secondary-foreground/90">
            <div className="text-4xl font-bold">~1 млн</div>
            <div className="text-sm uppercase tracking-wider">Население</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-secondary-foreground/30" />
          <div className="text-secondary-foreground/90">
            <div className="text-4xl font-bold">60 км</div>
            <div className="text-sm uppercase tracking-wider">Вдоль Волги</div>
          </div>
        </div>
      </div>
    </section>
  )
}
