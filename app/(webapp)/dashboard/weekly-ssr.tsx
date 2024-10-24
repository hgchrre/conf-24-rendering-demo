import { WeeklyChart } from '@/components/dashboard/weekly-chart'

interface WeeklyData {
  date: string
  value: number
}

async function getWeeklyData(): Promise<WeeklyData[]> {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/weekly', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Weekly() {
  const data = await getWeeklyData()

  return <WeeklyChart data={data} />
}
