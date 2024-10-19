import Image from 'next/image'

interface AIGeneration {
  id: number
  imageUrl: string
  creator: string
}

async function getGenerations(): Promise<AIGeneration[]> {
  // In a real application, this would be an actual API endpoint
  const res = await fetch('https://api.example.com/ai-generations', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  })

  if (!res.ok) {
    throw new Error('Failed to fetch generations')
  }

  return res.json()
}

export default async function Carousel() {
  const generations = await getGenerations()

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 py-4">
        {generations.map((gen) => (
          <div key={gen.id} className="flex-none w-64">
            <div className="bg-muted/40 rounded-lg overflow-hidden">
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
