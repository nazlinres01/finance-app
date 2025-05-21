"use client"

import { Progress } from "@/components/ui/progress"

const budgetCategories = [
  {
    id: "1",
    name: "Housing",
    spent: 1200,
    budget: 1200,
    color: "bg-blue-500",
  },
  {
    id: "2",
    name: "Food",
    spent: 420,
    budget: 500,
    color: "bg-orange-500",
  },
  {
    id: "3",
    name: "Transportation",
    spent: 180,
    budget: 300,
    color: "bg-green-500",
  },
  {
    id: "4",
    name: "Entertainment",
    spent: 150,
    budget: 200,
    color: "bg-purple-500",
  },
  {
    id: "5",
    name: "Utilities",
    spent: 210,
    budget: 250,
    color: "bg-yellow-500",
  },
]

export function BudgetProgress() {
  return (
    <div className="space-y-8">
      {budgetCategories.map((category) => {
        const percentage = Math.min(Math.round((category.spent / category.budget) * 100), 100)
        const remaining = category.budget - category.spent

        return (
          <div key={category.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-2 h-3 w-3 rounded-full ${category.color}`}></div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ${category.spent.toFixed(2)} / ${category.budget.toFixed(2)}
              </span>
            </div>
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{percentage}% used</span>
              <span>${remaining > 0 ? remaining.toFixed(2) : 0} remaining</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
