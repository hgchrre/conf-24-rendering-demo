'use client'

import { useEffect, useState } from "react"
import { YearlyChart } from '@/components/dashboard/yearly-chart'

interface YearlyData {
  currentYear: {
    year: number;
    generationsPerDay: number;
    totalGenerations: number;
  };
  previousYear: {
    year: number;
    generationsPerDay: number;
    totalGenerations: number;
  };
}

export default function YearlyCSR() {
  const [data, setData] = useState<YearlyData | null>(null)
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

  if (!data) {
    return <div>No data available</div>
  }

  return <YearlyChart data={data} />
}
