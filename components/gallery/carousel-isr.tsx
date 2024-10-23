import { CarouselContent, AIGeneration } from './carousel-content'

async function getGenerations(): Promise<AIGeneration[]> {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/gallery', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  })

  if (!res.ok) {
    throw new Error('Failed to fetch AI generations')
  }

  return res.json()
}

export default async function Carousel() {
  const generations = await getGenerations()

  return <CarouselContent generations={generations} />
}
