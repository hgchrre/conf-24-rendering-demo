'use client'

import { useEffect, useState } from "react"
import { YearlyChart } from '@/components/dashboard/yearly-chart'

interface YearlyDataItem {
  id: number;
  created_at: string;
  value: number;
}

export default function Yearly() {
  const [data, setData] = useState<YearlyDataItem[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/yearly')
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

  if (!data || data.length === 0) {
    return <div>No data available</div>
  }

  return <YearlyChart data={data} />
}
