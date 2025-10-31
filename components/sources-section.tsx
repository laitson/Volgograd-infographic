import { ExternalLink } from "lucide-react"

export function SourcesSection() {
  const sources = [
    {
      title: "Википедия - Волгоград",
      url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4",
    },
    {
      title: "Culture.ru - Культурный гид по Волгограду",
      url: "https://www.culture.ru/touristRoutes/486/kulturnyi-gid-po-volgogradu",
    },
    {
      title: "V102.ru - Новости Волгограда",
      url: "https://v102.ru/",
    },
    {
      title: "Официальный сайт администрации Волгограда",
      url: "https://www.volgadmin.ru/d/Home/Index",
    },
  ]

  const infographicTools = [
    {
      title: "Time.Graphics - Создание временных шкал",
      url: "https://time.graphics/ru/",
    },
    {
      title: "Piktochart - AI редактор инфографики",
      url: "https://piktochart.com/generative-ai/editor/",
    },
    {
      title: "Time.Graphics Editor - Редактор временных линий",
      url: "https://time.graphics/ru/editor",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Использованные источники</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#760009] hover:bg-gray-50 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-[#760009] flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-[#760009] transition-colors">{source.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Сервисы для создания инфографики</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {infographicTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#760009] hover:bg-gray-50 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-[#760009] flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-[#760009] transition-colors">{tool.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
