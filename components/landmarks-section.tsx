import { Card } from "@/components/ui/card"

export function LandmarksSection() {
  const landmarks = [
    {
      name: "Мамаев курган",
      description: 'Главная высота России, мемориальный комплекс "Героям Сталинградской битвы"',
      image: "/mamayev-kurgan-motherland-calls-statue-volgograd.jpg",
    },
    {
      name: "Музей-панорама",
      description: 'Музей-заповедник "Сталинградская битва" с круговой панорамой',
      image: "/stalingrad-battle-panorama-museum.jpg",
    },
    {
      name: "Набережная 62-й Армии",
      description: "Центральная набережная города протяженностью 3,5 км",
      image: "/volgograd-embankment-volga-river.jpg",
    },
    {
      name: "Площадь Павших Борцов",
      description: "Центральная площадь города с вечным огнём",
      image: "/fallen-fighters-square-volgograd.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Главные достопримечательности</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {landmarks.map((landmark, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={landmark.image || "/placeholder.svg"}
                  alt={landmark.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{landmark.name}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{landmark.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
