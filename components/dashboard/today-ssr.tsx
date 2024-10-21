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
        14.9B{" "}
        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
          photons
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ChartContainer
        config={{
          photons: {
            label: "Photons",
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
              date: "2024-01-01",
              photons: 2000,
            },
            {
              date: "2024-01-02",
              photons: 2100,
            },
            {
              date: "2024-01-03",
              photons: 2200,
            },
            {
              date: "2024-01-04",
              photons: 1300,
            },
            {
              date: "2024-01-05",
              photons: 1400,
            },
            {
              date: "2024-01-06",
              photons: 2500,
            },
            {
              date: "2024-01-07",
              photons: 1600,
            },
          ]}
        >
          <Bar
            dataKey="photons"
            fill="var(--color-photons)"
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
              value="Average Photons"
              offset={10}
              fill="hsl(var(--foreground))"
            />
            <Label
              position="insideTopLeft"
              value="12.3B"
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
        Over the past 7 days, you have intercepted{" "}
        <span className="font-medium text-foreground">53.89M</span> photons.
      </CardDescription>
      <CardDescription>
        You need{" "}
        <span className="font-medium text-foreground">8.1M</span> more
        photons to reach your goal.
      </CardDescription>
    </CardFooter>
  </Card>
  )
}
