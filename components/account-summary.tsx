"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const accounts = [
  {
    id: "1",
    name: "Checking Account",
    balance: 3245.67,
    accountNumber: "****4567",
    type: "Bank Account",
  },
  {
    id: "2",
    name: "Savings Account",
    balance: 12500.22,
    accountNumber: "****7890",
    type: "Bank Account",
  },
  {
    id: "3",
    name: "Credit Card",
    balance: -1893.12,
    limit: 5000,
    accountNumber: "****1234",
    type: "Credit Card",
  },
]

export function AccountSummary() {
  return (
    <div className="grid gap-4">
      {accounts.map((account) => (
        <Card key={account.id}>
          <CardHeader className="pb-2">
            <CardTitle>{account.name}</CardTitle>
            <CardDescription>
              {account.type} • {account.accountNumber}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${account.balance.toFixed(2)}</div>
            {account.type === "Credit Card" && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Credit Used</div>
                  <div className="font-medium">
                    ${Math.abs(account.balance).toFixed(2)} / ${account.limit.toFixed(2)}
                  </div>
                </div>
                <Progress value={(Math.abs(account.balance) / account.limit) * 100} />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
