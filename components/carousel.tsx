'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface AIGeneration {
  id: number
  imageUrl: string
  creator: string
}

const Carousel: React.FC = () => {
  const [generations, setGenerations] = useState<AIGeneration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const fetchGenerations = useCallback(async () => {
    try {
      // Simulating an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Mock data
      const mockData: AIGeneration[] = [
        { id: 1, imageUrl: 'https://picsum.photos/200/300?random=1', creator: 'User1' },
        { id: 2, imageUrl: 'https://picsum.photos/200/300?random=2', creator: 'User2' },
        { id: 3, imageUrl: 'https://picsum.photos/200/300?random=3', creator: 'User3' },
        { id: 4, imageUrl: 'https://picsum.photos/200/300?random=4', creator: 'User4' },
        { id: 5, imageUrl: 'https://picsum.photos/200/300?random=5', creator: 'User5' },
      ]

      setGenerations(prevGenerations => {
        const newGenerations = [...prevGenerations, ...mockData]
        // Keep only the last 15 items to prevent excessive memory usage
        return newGenerations.slice(-15)
      })
      setLoading(false)
    } catch (err) {
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

  if (loading && generations.length === 0) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-x-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex space-x-4 animate-scroll">
        {[...generations, ...generations].map((gen, index) => (
          <div key={`${gen.id}-${index}`} className="flex-none w-64">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={gen.imageUrl}
                alt={`AI Generation by ${gen.creator}`}
                width={200}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-300">Created by {gen.creator}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
