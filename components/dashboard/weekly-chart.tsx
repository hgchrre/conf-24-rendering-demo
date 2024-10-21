'use client'

import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface DailyData {
  date: string
  value: number
}

interface WeeklyChartProps {
  data: DailyData[]
}

export function WeeklyChart({ data }: WeeklyChartProps) {
  const totalGenerations = data.reduce((sum, item) => sum + item.value, 0)
  const averageGenerations = Math.round(totalGenerations / data.length)
  const todayGenerations = data[data.length - 1]?.value || 0
  const goalGenerations = 2000 // Assuming a fixed goal for this example
  const remainingGenerations = Math.max(0, goalGenerations - todayGenerations)

  return (
    <Card className="lg:max-w-md">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>Today</CardDescription>
        <CardTitle className="text-4xl tabular-nums">
          {todayGenerations.toLocaleString()}{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            generations
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            generations: {
              label: "Generations",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <BarChart
            accessibilityLayer
            margin={{
              left: -4,
              right: -4,
            }}
            data={data.map(item => ({ date: item.date, generations: item.value }))}
          >
            <Bar
              dataKey="generations"
              fill="var(--color-generations)"
              radius={5}
              fillOpacity={0.6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }}
            />
            <ChartTooltip
              defaultIndex={data.length - 1}
              content={
                <ChartTooltipContent
                  hideIndicator
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  }}
                />
              }
              cursor={false}
            />
            <ReferenceLine
              y={averageGenerations}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              strokeWidth={1}
            >
              <Label
                position="insideBottomLeft"
                value="Average Generations"
                offset={10}
                fill="hsl(var(--foreground))"
              />
              <Label
                position="insideTopLeft"
                value={averageGenerations.toLocaleString()}
                className="text-lg"
                fill="hsl(var(--foreground))"
                offset={10}
                startOffset={100}
              />
            </ReferenceLine>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          Over the past {data.length} days, you have made{" "}
          <span className="font-medium text-foreground">{totalGenerations.toLocaleString()}</span> generations.
        </CardDescription>
        <CardDescription>
          You need{" "}
          <span className="font-medium text-foreground">{remainingGenerations.toLocaleString()}</span> more
          generations to reach your goal.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
