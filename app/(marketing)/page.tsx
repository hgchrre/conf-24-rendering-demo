import HeroImage from "@/components/homepage/hero-image";
import CTA from "@/components/homepage/cta";

export default async function Landing() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Header Text
        </h1>
        <p className="text-xl mb-10 text-gray-300">
          Subheader Text
        </p>
        <CTA />
      </div>
      <HeroImage />
    </div>
  )
}
