'use client'

import { useEffect, useState } from "react"
import { LiveChart } from '@/components/dashboard/live-chart'

interface LiveData {
  numbers: number[];
  last_update: string;
}

const MAX_DATA_POINTS = 7; // Adjust this to change how many points are displayed

export default function Live() {
  const [data, setData] = useState<number[]>([])
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
        const newNumbers = result[0].numbers
        setData(prevData => {
          const updatedData = [...prevData, ...newNumbers].slice(-MAX_DATA_POINTS)
          return updatedData
        })
        setIsLoading(false)
      } catch (err) {
        setError('An error occurred while fetching data')
        setIsLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5000) // Refresh every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const chartData = data.map((value, index) => ({
    index: index,
    time: value,
    label: index === data.length - 1 ? `${value} (live)` : `${value} (${(data.length - 1 - index) * 5}s ago)`,
    isLive: index === data.length - 1
  }))

  const latestValue = data[data.length - 1]
  const maxValue = Math.max(...data) + 5 // Adding 5 for some headroom

  return <LiveChart data={chartData} latestValue={latestValue} maxValue={maxValue} maxDataPoints={MAX_DATA_POINTS} />
}
