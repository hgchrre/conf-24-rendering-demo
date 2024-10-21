'use client'

import { useEffect, useState } from "react"
import { TodayChart } from '@/components/dashboard/today-chart'

interface DailyData {
  date: string
  value: number
}

export default function Today() {
  const [data, setData] = useState<DailyData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/today')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError('An error occurred while fetching data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <TodayChart data={data} />
}
