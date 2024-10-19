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

  return (
    <div className="w-full overflow-x-auto">
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
    </div>
  )
}
