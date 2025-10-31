export function HistoryTimeline() {
  const events = [
    {
      year: "1589",
      title: "Основание Царицына",
      description: "Город был основан как крепость для защиты южных рубежей России",
    },
    {
      year: "1925",
      title: "Переименование в Сталинград",
      description: "Город получил новое имя в честь Иосифа Сталина",
    },
    {
      year: "1942-1943",
      title: "Сталинградская битва",
      description: "Переломное сражение Великой Отечественной войны",
    },
    {
      year: "1961",
      title: "Переименование в Волгоград",
      description: "Город получил современное название",
    },
    {
      year: "1967",
      title: "Открытие мемориала Мамаев курган",
      description: "Торжественное открытие памятника-ансамбля героям Сталинградской битвы",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance">Историческая хронология</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-[120px] text-3xl font-bold text-primary text-center">{event.year}</div>
                  </div>

                  {/* Event card */}
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ml-8">
                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-lg">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
