"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export function InfographicsSection() {
  const populationData = [
    { year: "1897", population: 55 },
    { year: "1926", population: 151 },
    { year: "1959", population: 591 },
    { year: "1989", population: 999 },
    { year: "2010", population: 1021 },
    { year: "2023", population: 1004 },
  ]

  const industryData = [
    { name: "Машиностроение", value: 35 },
    { name: "Металлургия", value: 25 },
    { name: "Химическая", value: 20 },
    { name: "Пищевая", value: 15 },
    { name: "Другое", value: 5 },
  ]

  const COLORS = [
    "#760009", // Base burgundy
    "#8f0a0f", // Slightly lighter
    "#a81419", // Medium
    "#c11e23", // Lighter
    "#da282d", // Lightest
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Инфографика и статистика</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Рост населения (тыс. чел.)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={populationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0 0)" />
                <XAxis dataKey="year" stroke="oklch(0.50 0 0)" />
                <YAxis stroke="oklch(0.50 0 0)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(1 0 0)",
                    border: "1px solid oklch(0.90 0 0)",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="population" fill="oklch(0.35 0.15 25)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Структура промышленности (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={industryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(1 0 0)",
                    border: "1px solid oklch(0.90 0 0)",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-muted/50">
            <div className="text-4xl font-bold text-primary mb-2">38</div>
            <div className="text-xl font-semibold mb-1">Музеев</div>
            <div className="text-base text-muted-foreground">Культурное наследие города</div>
          </Card>

          <Card className="p-6 text-center bg-muted/50">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <div className="text-xl font-semibold mb-1">Театров</div>
            <div className="text-base text-muted-foreground">Центры искусства и культуры</div>
          </Card>

          <Card className="p-6 text-center bg-muted/50">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-xl font-semibold mb-1">ВУЗов</div>
            <div className="text-base text-muted-foreground">Образовательные учреждения</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
