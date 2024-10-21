"use client"

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

export default function Today() {
  return (
    <Card
    className="lg:max-w-md" x-chunk="charts-01-chunk-0"
  >
    <CardHeader className="space-y-0 pb-2">
      <CardDescription>Today</CardDescription>
      <CardTitle className="text-4xl tabular-nums">
        1,600{" "}
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
          data={[
            {
              date: "2024-10-19",
              generations: 2000,
            },
            {
              date: "2024-10-20",
              generations: 2100,
            },
            {
              date: "2024-10-21",
              generations: 2200,
            },
            {
              date: "2024-10-22",
              generations: 1300,
            },
            {
              date: "2024-10-23",
              generations: 1400,
            },
            {
              date: "2024-10-24",
              generations: 2500,
            },
            {
              date: "2024-10-25",
              generations: 1600,
            },
          ]}
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
            defaultIndex={2}
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
            y={1200}
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
              value="1,870"
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
        Over the past 7 days, you have made{" "}
        <span className="font-medium text-foreground">13,100</span> generations.
      </CardDescription>
      <CardDescription>
        You need{" "}
        <span className="font-medium text-foreground">200</span> more
        generations to reach your goal.
      </CardDescription>
    </CardFooter>
  </Card>
  )
}
