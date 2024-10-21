import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface AIGeneration {
  id: number
  user_id: number
  title: string
  description: string
  content: string
  position: number
  created_at: string
}

interface CarouselContentProps {
  generations: AIGeneration[]
}

export function CarouselContent({ generations }: CarouselContentProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="animate-scroll flex">
        <div className="flex space-x-4 py-4">
          {generations.map((gen) => (
            <Card key={gen.id} className="flex-none w-64 bg-card">
              <CardHeader>
                <CardTitle className="text-lg truncate">{gen.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  By User {gen.user_id}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2 line-clamp-2">{gen.description}</p>
                <p className="text-xs text-muted-foreground">
                  Created: {new Date(gen.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex space-x-4 py-4">
          {generations.map((gen) => (
            <Card key={`${gen.id}-duplicate`} className="flex-none w-64 bg-card">
              <CardHeader>
                <CardTitle className="text-lg truncate">{gen.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  By User {gen.user_id}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2 line-clamp-2">{gen.description}</p>
                <p className="text-xs text-muted-foreground">
                  Created: {new Date(gen.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
