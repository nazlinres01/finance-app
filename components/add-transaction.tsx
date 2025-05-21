"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export function AddTransaction() {
  const [date, setDate] = useState<Date>()
  const [transactionType, setTransactionType] = useState("expense")

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <RadioGroup defaultValue="expense" className="grid grid-cols-2 gap-4" onValueChange={setTransactionType}>
          <div>
            <RadioGroupItem value="expense" id="expense" className="peer sr-only" />
            <Label
              htmlFor="expense"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Expense
            </Label>
          </div>
          <div>
            <RadioGroupItem value="income" id="income" className="peer sr-only" />
            <Label
              htmlFor="income"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Income
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" placeholder="Enter transaction description" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
            <Input id="amount" type="number" step="0.01" min="0" placeholder="0.00" className="pl-8" />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {transactionType === "expense" ? (
                <>
                  <SelectItem value="food">Food & Groceries</SelectItem>
                  <SelectItem value="housing">Housing & Utilities</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                  <SelectItem value="other-expense">Other</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="salary">Salary</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                  <SelectItem value="investments">Investments</SelectItem>
                  <SelectItem value="gifts">Gifts</SelectItem>
                  <SelectItem value="other-income">Other</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="w-full justify-start text-left font-normal" id="date">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="account">Account</Label>
          <Select>
            <SelectTrigger id="account">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checking">Checking Account</SelectItem>
              <SelectItem value="savings">Savings Account</SelectItem>
              <SelectItem value="credit">Credit Card</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Input id="notes" placeholder="Add additional details" />
        </div>
      </div>

      <Button className="w-full">Add Transaction</Button>
    </form>
  )
}
