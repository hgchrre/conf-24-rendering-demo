"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface YearlyDataItem {
  id: number;
  created_at: string;
  value: number;
}

interface YearlyChartProps {
  data: YearlyDataItem[];
}

const chartConfig = {
  generations: {
    label: "Generations",
  },
  2023: {
    label: "2023",
    color: "hsl(var(--chart-1))",
  },
  2024: {
    label: "2024",
    color: "hsl(var(--chart-2))",
  },
  2025: {
    label: "2025",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function YearlyChart({ data }: YearlyChartProps) {
  // Sort data by id in descending order
  const sortedData = [...data].sort((a, b) => b.id - a.id);

  const chartData = sortedData.map(item => ({
    year: item.id.toString(),
    generations: item.value,
    fill: `var(--color-${item.id})`,
  }));

  const latestYear = chartData[0];
  const previousYear = chartData[1];
  const percentageChange = previousYear
    ? ((latestYear.generations - previousYear.generations) / previousYear.generations) * 100
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yearly Generations</CardTitle>
        <CardDescription>{`${chartData[chartData.length - 1].year} - ${latestYear.year}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label || value
              }
            />
            <XAxis dataKey="generations" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="generations" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {percentageChange > 0 ? "Trending up" : "Trending down"} by {Math.abs(percentageChange).toFixed(1)}% this year{" "}
          <TrendingUp className={`h-4 w-4 ${percentageChange < 0 ? 'rotate-180' : ''}`} />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total generations per day for the last {chartData.length} years
        </div>
      </CardFooter>
    </Card>
  )
}
