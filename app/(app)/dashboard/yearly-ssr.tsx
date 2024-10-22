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

async function getYearlyData(): Promise<YearlyData> {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/dashboard/yearly', { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function YearlySSR() {
  const data = await getYearlyData()

  return <YearlyChart data={data} />
}
