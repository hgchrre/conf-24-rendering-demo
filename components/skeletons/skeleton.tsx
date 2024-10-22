import { Skeleton } from "@/components/ui/skeleton"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SkeletonCard() {

  return (
    <Card className="lg:max-w-md">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-4xl tabular-nums">
            <Skeleton className="h-4 w-[250px]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="animate-pulse">
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
            <Skeleton className="h-4 w-[250px]" />
        </CardDescription>
        <CardDescription>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
