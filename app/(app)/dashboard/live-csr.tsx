'use client'

import { useEffect, useState } from "react"
import { LiveChart } from '@/components/dashboard/live-chart'

interface LiveData {
  numbers: number[];
  last_update: string;
}

export default function Live() {
  const [data, setData] = useState<LiveData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/live')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result[0])
      } catch (err) {
        setError('An error occurred while fetching data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5000) // Refresh every 5 seconds
    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!data) {
    return <div>No data available</div>
  }

  const chartData = data.numbers.map((value, index) => ({
    date: new Date(Date.now() - (data.numbers.length - 1 - index) * 5000).toISOString(),
    time: value
  }))

  const latestValue = data.numbers[data.numbers.length - 1]

  return <LiveChart data={chartData} latestValue={latestValue} />
}
