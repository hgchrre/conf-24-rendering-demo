'use client'

import React, { useState, useEffect } from 'react'
import { CarouselContent, AIGeneration } from './carousel-content'

export default function ClientCarousel() {
  const [generations, setGenerations] = useState<AIGeneration[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGenerations() {
      try {
        const response = await fetch('https://conf-24-rendering-api.vercel.app/api/gallery')
        if (!response.ok) {
          throw new Error('Failed to fetch AI generations')
        }
        const data: AIGeneration[] = await response.json()
        setGenerations(data)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
        setError('Failed to fetch AI generations')
        setIsLoading(false)
      }
    }

    fetchGenerations()
  }, [])

  if (isLoading) return <div className="text-center p-4">Loading...</div>
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>
  if (generations.length === 0) return <div className="text-center p-4">No generations found.</div>

  return <CarouselContent generations={generations} />
}
