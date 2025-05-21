"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    income: 2400,
    expenses: 1800,
  },
  {
    name: "Feb",
    income: 2210,
    expenses: 1600,
  },
  {
    name: "Mar",
    income: 2900,
    expenses: 2100,
  },
  {
    name: "Apr",
    income: 2780,
    expenses: 2000,
  },
  {
    name: "May",
    income: 3090,
    expenses: 2200,
  },
  {
    name: "Jun",
    income: 3490,
    expenses: 1900,
  },
  {
    name: "Jul",
    income: 3456,
    expenses: 1893,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="#f87171" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
