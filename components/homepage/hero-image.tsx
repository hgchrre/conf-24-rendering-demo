import Image from "next/image"

export default async function HeroImage() {

  return (
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
  )
}
