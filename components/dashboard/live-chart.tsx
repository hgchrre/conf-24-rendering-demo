"use client"

import {
  Area,
  AreaChart,
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface LiveChartProps {
  data: {
    date: string;
    time: number;
  }[];
  latestValue: number;
}

export function LiveChart({ data, latestValue }: LiveChartProps) {
  return (
    <Card className="max-w-xs">
      <CardHeader className="space-y-0 pb-0">
        <CardDescription>Live Generations</CardDescription>
        <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
          {latestValue}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            per minute
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer
          config={{
            time: {
              label: "Time",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" hide />
            <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
            <defs>
              <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="time"
              type="natural"
              fill="url(#fillTime)"
              fillOpacity={0.4}
              stroke="var(--color-time)"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              formatter={(value) => (
                <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                  Generations
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      /min
                    </span>
                  </div>
                </div>
              )}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
