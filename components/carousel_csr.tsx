'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AIGeneration {
  id: number
  user_id: number
  title: string
  description: string
  content: string
  position: number
  created_at: string
}

const Carousel: React.FC = () => {
  const [generations, setGenerations] = useState<AIGeneration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const fetchGenerations = useCallback(async () => {
    try {
      const response = await fetch('https://conf-24-rendering-api.vercel.app/api/gallery')
      if (!response.ok) {
        throw new Error('Failed to fetch AI generations')
      }
      const data: AIGeneration[] = await response.json()
      setGenerations(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch AI generations')
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchGenerations()
  }, [fetchGenerations])

  useEffect(() => {
    if (!carouselRef.current || isPaused) return

    const scrollCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0
        }
      }
    }

    const intervalId = setInterval(scrollCarousel, 30)

    return () => clearInterval(intervalId)
  }, [isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  if (loading) return <div className="text-center p-4">Loading...</div>
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-x-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex space-x-4 animate-scroll">
        {[...generations, ...generations].map((gen, index) => (
          <Card key={`${gen.id}-${index}`} className="flex-none w-64 bg-card">
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
  )
}

export default Carousel
