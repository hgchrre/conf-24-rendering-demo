import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Carousel from "@/components/carousel"

export default function Gallery() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold mb-8 text-center">What Others Have Made</h2>
        <Carousel />
    </div>
  )
}



