"use client"

import { ArrowDownIcon, CreditCard, Home, ShoppingBag, Utensils } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "1",
    description: "Grocery Shopping",
    amount: -85.32,
    date: "2023-05-15",
    category: "Food",
    icon: <ShoppingBag className="h-4 w-4" />,
    color: "bg-orange-500",
  },
  {
    id: "2",
    description: "Salary Deposit",
    amount: 2450.0,
    date: "2023-05-01",
    category: "Income",
    icon: <ArrowDownIcon className="h-4 w-4" />,
    color: "bg-green-500",
  },
  {
    id: "3",
    description: "Rent Payment",
    amount: -1200.0,
    date: "2023-05-03",
    category: "Housing",
    icon: <Home className="h-4 w-4" />,
    color: "bg-blue-500",
  },
  {
    id: "4",
    description: "Restaurant",
    amount: -42.5,
    date: "2023-05-10",
    category: "Dining",
    icon: <Utensils className="h-4 w-4" />,
    color: "bg-yellow-500",
  },
  {
    id: "5",
    description: "Credit Card Payment",
    amount: -320.0,
    date: "2023-05-08",
    category: "Bills",
    icon: <CreditCard className="h-4 w-4" />,
    color: "bg-purple-500",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback className={transaction.color}>{transaction.icon}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <p className="text-sm text-muted-foreground">{transaction.date}</p>
          </div>
          <div className="ml-auto font-medium">
            <Badge variant={transaction.amount > 0 ? "outline" : "secondary"} className="ml-auto">
              {transaction.category}
            </Badge>
          </div>
          <div className={`ml-4 font-medium ${transaction.amount > 0 ? "text-green-500" : ""}`}>
            {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}
