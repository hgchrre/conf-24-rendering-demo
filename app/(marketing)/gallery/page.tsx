import Carousel from "@/components/gallery/carousel"

export default function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">What Others Have Made</h2>
      <div className="w-full">
        <Carousel />
      </div>
    </div>
  )
}
