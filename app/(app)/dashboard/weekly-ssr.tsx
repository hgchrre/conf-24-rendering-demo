import { WeeklyChart } from '@/components/dashboard/weekly-chart'

interface DailyData {
  date: string
  value: number
}

async function getTodayData(): Promise<DailyData[]> {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/today', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Weekly() {
  const data = await getTodayData()

  return <WeeklyChart data={data} />
}
