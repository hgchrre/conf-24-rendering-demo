import Weekly from "./weekly-ssr"
import Yearly from "./yearly-isr"
import Live from "./live-csr"
import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { SkeletonCard } from "@/components/skeletons/skeleton"

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
    <div className="mx-auto max-w-7xl p-6 sm:p-8">
      <WelcomeMessage />
      <div className="flex flex-col gap-6">
        <div className="w-full">
          <Suspense fallback={<SkeletonCard />}>
            <Live />
          </Suspense>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
            <Suspense fallback={<SkeletonCard />}>
              <Weekly />
            </Suspense>
            <Suspense fallback={<SkeletonCard />}>
              <Yearly />
            </Suspense>
        </div>
      </div>
    </div>
  )
}
