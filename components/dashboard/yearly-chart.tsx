'use client'

import {
  Bar,
  BarChart,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"

interface YearlyDataItem {
  id: number;
  created_at: string;
  value: number;
}

interface YearlyChartProps {
  data: YearlyDataItem[];
}

export function YearlyChart({ data }: YearlyChartProps) {
  // Sort data by id in descending order (assuming id represents the year)
  const sortedData = [...data].sort((a, b) => b.id - a.id);

  return (
    <Card className="max-w-xs">
      <CardHeader>
        <CardTitle>Progress</CardTitle>
        <CardDescription>
          You're averaging more generations a day this year than last year.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {sortedData.map((yearData, index) => (
          <div key={yearData.id} className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {yearData.value.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                generations/day
              </span>
            </div>
            <ChartContainer
              config={{
                generations: {
                  label: "Generations",
                  color: index === 0 ? "hsl(var(--chart-1))" : "hsl(var(--muted))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: yearData.id.toString(),
                    generations: yearData.value,
                  },
                ]}
              >
                <Bar
                  dataKey="generations"
                  fill="var(--color-generations)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="date"
                    offset={8}
                    fontSize={12}
                    fill={index === 0 ? "white" : "hsl(var(--muted-foreground))"}
                  />
                </Bar>
                <YAxis dataKey="date" type="category" tickCount={1} hide />
                <XAxis dataKey="generations" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
