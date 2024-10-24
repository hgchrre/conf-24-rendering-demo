"use client"

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
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

interface LiveChartProps {
  data: {
    index: number;
    time: number;
    label: string;
    isLive: boolean;
  }[];
  latestValue: number;
  maxValue: number;
  maxDataPoints: number;
}

export function LiveChart({ data, latestValue, maxValue, maxDataPoints }: LiveChartProps) {
  return (
    <Card className="w-full h-[200px]">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription className="flex items-baseline gap-1">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Generation Speed
        </CardDescription>
        <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
          {latestValue}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            per minute
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
        className="max-h-[100px] w-full"
          config={{
            time: {
              label: "Time",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="index"
                type="number"
                domain={[0, maxDataPoints - 1]}
                hide
              />
              <YAxis hide domain={[0, maxValue]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Generations
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].payload.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
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
                type="monotone"
                dataKey="time"
                stroke="var(--color-time)"
                fillOpacity={1}
                fill="url(#fillTime)"
              />
              {data.map((entry, index) => (
                entry.isLive && (
                  <ReferenceDot
                    key={index}
                    x={entry.index}
                    y={entry.time}
                    r={4}
                    fill="green"
                    stroke="none"
                  >
                    <animate attributeName="r" from="4" to="6" dur="1s" repeatCount="indefinite" />
                  </ReferenceDot>
                )
              ))}
            </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
