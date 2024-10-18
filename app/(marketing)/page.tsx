import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

async function getHomepageData() {
  const res = await fetch('https://conf-24-rendering-api.vercel.app/api/homepage');
  if (!res.ok) {
    throw new Error('Failed to fetch homepage data');
  }
  return res.json();
}

export default async function Landing() {
  const { header, subheader } = await getHomepageData();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {header}
        </h1>
        <p className="text-xl mb-10 text-gray-300">
          {subheader}
        </p>
        <Link href="/dashboard" prefetch>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full aspect-[5/4] max-w-[500px] bounce-animation">
          <Image
            src="/glass.png"
            alt="Cube SaaS Platform"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            className="rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
