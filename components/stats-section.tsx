import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      value: "565 км²",
      label: "Площадь города",
      description: "Один из крупнейших городов России по территории",
    },
    {
      value: "8",
      label: "Районов",
      description: "Административное деление города",
    },
    {
      value: "85 м",
      label: "Высота статуи",
      description: '"Родина-мать зовёт!" на Мамаевом кургане',
    },
    {
      value: "200 дней",
      label: "Сталинградская битва",
      description: "Переломный момент Второй мировой войны",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Волгоград в цифрах</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
