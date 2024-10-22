import Weekly from "./weekly-ssr"
import Yearly from "./yearly-isr"
import Live from "./live-csr"
import { Suspense } from "react"

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
      <div className="chart-wrapper flex flex-col gap-6">
        <div className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <Live />
          </Suspense>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2">
            <Suspense fallback={<div>Loading...</div>}>
              <Weekly />
            </Suspense>
          </div>
          <div className="w-full sm:w-1/2">
            <Suspense fallback={<div>Loading...</div>}>
              <Yearly />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
