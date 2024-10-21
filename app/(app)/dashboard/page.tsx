"use client"

import Live from "@/components/dashboard/live-csr"
import Progress from "@/components/dashboard/progress-isr"
import Today from "@/components/dashboard/today-ssr"

function getTimeOfDay() {
  const hour = new Date().getHours()
  if (hour < 12) return "morning"
  if (hour < 18) return "afternoon"
  return "evening"
}

function WelcomeMessage() {
  const timeOfDay = getTimeOfDay()
  return (
    <h2 className="text-2xl font-bold mb-6">
      Good {timeOfDay}! Welcome to your dashboard.
    </h2>
  )
}

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl p-6 sm:p-8">
      <WelcomeMessage />
      <div className="chart-wrapper flex flex-col flex-wrap items-start justify-center gap-6 sm:flex-row">
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
          <Today />
        </div>
        <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
          <Progress />
        </div>
        <div className="grid w-full flex-1 gap-6">
          <Live />
        </div>
      </div>
    </div>
  )
}
