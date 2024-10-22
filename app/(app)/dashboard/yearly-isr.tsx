import { YearlyChart } from '@/components/dashboard/yearly-chart'

interface YearlyDataItem {
  id: number;
  created_at: string;
  value: number;
}

async function getYearlyData(): Promise<YearlyDataItem[]> {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/yearly', { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Yearly() {
  const data = await getYearlyData()

  return <YearlyChart data={data} />
}
