"use client"

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
export default function Progress() {
  return (
    <Card
    className="max-w-xs" x-chunk="charts-01-chunk-2"
  >
    <CardHeader>
      <CardTitle>Progress</CardTitle>
      <CardDescription>
        You're averaging more photons a day this year than last year.
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid auto-rows-min gap-2">
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
          12.3B
          <span className="text-sm font-normal text-muted-foreground">
            photons/day
          </span>
        </div>
        <ChartContainer
          config={{
            photons: {
              label: "Photons",
              color: "hsl(var(--chart-1))",
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
                date: "2024",
                photons: 12300,
              },
            ]}
          >
            <Bar
              dataKey="photons"
              fill="var(--color-photons)"
              radius={4}
              barSize={32}
            >
              <LabelList
                position="insideLeft"
                dataKey="date"
                offset={8}
                fontSize={12}
                fill="white"
              />
            </Bar>
            <YAxis dataKey="date" type="category" tickCount={1} hide />
            <XAxis dataKey="photons" type="number" hide />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="grid auto-rows-min gap-2">
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
          10.1B
          <span className="text-sm font-normal text-muted-foreground">
            photons/day
          </span>
        </div>
        <ChartContainer
          config={{
            steps: {
              label: "Steps",
              color: "hsl(var(--muted))",
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
                date: "2023",
                steps: 10100,
              },
            ]}
          >
            <Bar
              dataKey="steps"
              fill="var(--color-steps)"
              radius={4}
              barSize={32}
            >
              <LabelList
                position="insideLeft"
                dataKey="date"
                offset={8}
                fontSize={12}
                fill="hsl(var(--muted-foreground))"
              />
            </Bar>
            <YAxis dataKey="date" type="category" tickCount={1} hide />
            <XAxis dataKey="steps" type="number" hide />
          </BarChart>
        </ChartContainer>
      </div>
    </CardContent>
  </Card>
  )
}
