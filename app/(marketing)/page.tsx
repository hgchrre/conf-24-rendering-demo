import HeroImage from "@/components/homepage/hero-image";
import CTA from "@/components/homepage/cta";

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
        <CTA />
      </div>
      <HeroImage />
    </div>
  )
}
